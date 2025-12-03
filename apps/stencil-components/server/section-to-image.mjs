// server/node-image-runner.mjs
// URL → 섹션 캡처(WebP, 모바일 뷰 기본)
// - 우선순위: <tinto-section> → <section> → <main> → <body>
// - 2번째 인자로 #id 또는 CSS 셀렉터를 주면 그 섹션을 캡처(없으면 첫 번째 섹션)
// - Shadow DOM 깊은 탐색
// - 출력: output/image/<자동파일명>.webp
// - 기본 모바일 뷰포트: 390x844 @ DPR=3 (환경변수로 오버라이드 가능)

import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';

const isHttpUrl = (s) => /^https?:\/\//i.test(s);

const WIDTH = Number(process.env.WIDTH || 390);
const HEIGHT = Number(process.env.HEIGHT || 844);
const DPR = Number(process.env.DPR || 3);

const MOBILE_UA =
  process.env.UA ||
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

const CANDIDATES = ['tinto-section', 'section', 'main', 'body'];

const toSlug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\-_.]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

function autoOutputPathFromUrl(urlLike, idOrSel) {
  const dir = path.join('output', 'image');
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  try {
    const u = new URL(urlLike);
    const host = toSlug(u.hostname.replace(/\./g, '-'));
    const p = toSlug(u.pathname.replace(/\/+/g, '/').replace(/^\/|\/$/g, '')) || 'home';
    const idSlug = idOrSel ? toSlug(String(idOrSel)) : null;
    return path.join(dir, `${host}-${p}${idSlug ? `-${idSlug}` : ''}-${ts}.webp`);
  } catch {
    return path.join(dir, `image-${ts}.webp`);
  }
}
async function ensureDirFor(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

// Shadow DOM 포함: selector 또는 id로 타깃 찾기
async function findTargetSectionRect(page, idOrSelector) {
  return await page.evaluate(
    (CANDS, idOrSelector) => {
      const cssEscape =
        (globalThis.CSS && CSS.escape) ||
        ((s) => String(s).replace(/[^a-zA-Z0-9_\-]/g, (c) => '\\' + c));

      const isSelectorLike =
        typeof idOrSelector === 'string' &&
        (/^[#.]/.test(idOrSelector) || /[\s\[\].:#>+~]/.test(idOrSelector));

      const queue = [document];

      const queryIn = (root, sel) => {
        try {
          return root.querySelector ? root.querySelector(sel) : null;
        } catch {
          return null;
        }
      };

      // BFS로 모든 ShadowRoot 탐색하면서 selector/id 매칭
      while (queue.length) {
        const root = queue.shift();
        if (!root) continue;

        // 1) 명시된 id/selector가 있는 경우, 그것부터 시도
        if (idOrSelector) {
          let el = null;

          if (isSelectorLike) {
            el = queryIn(root, idOrSelector);
          } else {
            // 순서대로 시도: tinto-section#id → section#id → 그냥 #id
            for (const tag of CANDS) {
              el = queryIn(root, `${tag}#${cssEscape(idOrSelector)}`);
              if (el) break;
            }
            if (!el) el = queryIn(root, `#${cssEscape(idOrSelector)}`);
          }

          if (el) {
            try {
              el.scrollIntoView({ behavior: 'auto', block: 'center' });
              window.dispatchEvent(new Event('scroll'));
              window.dispatchEvent(new Event('resize'));
            } catch {}
            const r = el.getBoundingClientRect();
            return {
              x: Math.floor(r.left + window.scrollX),
              y: Math.floor(r.top + window.scrollY),
              w: Math.max(1, Math.ceil(r.width)),
              h: Math.max(1, Math.ceil(r.height)),
              docW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
              docH: Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
              found: true,
            };
          }
        }

        // 2) id/selector가 없을 때는 첫 번째 후보를 찾는다
        if (!idOrSelector) {
          for (const tag of CANDS) {
            const el = queryIn(root, `${tag}`);
            if (el) {
              try {
                el.scrollIntoView({ behavior: 'auto', block: 'center' });
                window.dispatchEvent(new Event('scroll'));
                window.dispatchEvent(new Event('resize'));
              } catch {}
              const r = el.getBoundingClientRect();
              return {
                x: Math.floor(r.left + window.scrollX),
                y: Math.floor(r.top + window.scrollY),
                w: Math.max(1, Math.ceil(r.width)),
                h: Math.max(1, Math.ceil(r.height)),
                docW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
                docH: Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
                found: true,
              };
            }
          }
        }

        // 다음 ShadowRoot들 큐에 추가
        const all = root.querySelectorAll ? root.querySelectorAll('*') : [];
        for (const el of all) {
          if (el && el.shadowRoot) queue.push(el.shadowRoot);
        }
      }

      // 못 찾음
      return { found: false };
    },
    CANDIDATES,
    idOrSelector || null,
  );
}

// 가벼운 리소스 대기 + 모바일 뷰포트 메타 보정
async function waitMobileReady(page) {
  // 없으면 meta viewport 추가(모바일 레이아웃 유도)
  await page.evaluate(() => {
    const has = document.querySelector('meta[name="viewport"]');
    if (!has) {
      const m = document.createElement('meta');
      m.name = 'viewport';
      m.content = 'width=device-width, initial-scale=1, viewport-fit=cover';
      document.head.appendChild(m);
    }
  });

  // 짧게 폰트/이미지/커스텀엘리먼트 대기
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    try {
      if ('customElements' in window) {
        await Promise.race([customElements.whenDefined('tinto-section'), sleep(1000)]);
      }
    } catch {}
    try {
      const tasks = [];
      if (document.fonts?.ready) tasks.push(document.fonts.ready);
      const imgs = Array.from(document.images);
      tasks.push(Promise.all(imgs.map((i) => i.decode().catch(() => {}))));
      await Promise.race([Promise.all(tasks), sleep(1500)]);
    } catch {}
  });
}

async function main() {
  const url = process.argv[2];
  const idOrSelector = process.argv[3] || ''; // 예: "#hero" 또는 "tinto-section#hero" 또는 "section.some"
  if (!url || !isHttpUrl(url)) {
    console.error('Usage: pnpm generate:image "<URL>" ["#id" | "CSS selector"]');
    process.exit(1);
  }

  const output = autoOutputPathFromUrl(url, idOrSelector);
  await ensureDirFor(output);

  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: {
      width: WIDTH,
      height: HEIGHT,
      deviceScaleFactor: DPR,
      isMobile: true,
      hasTouch: true,
    },
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--autoplay-policy=no-user-gesture-required',
      '--hide-scrollbars',
      '--force-color-profile=srgb',
    ],
  });

  try {
    const page = await browser.newPage();

    // 모바일 UA & 미디어 특성
    await page.setUserAgent(MOBILE_UA);
    await page.emulateMediaFeatures([
      { name: 'prefers-color-scheme', value: 'light' },
      { name: 'prefers-reduced-motion', value: 'no-preference' },
    ]);

    // 모바일로 로드
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {});
    await waitMobileReady(page);

    // 타깃 찾기(있으면 그 섹션, 없으면 첫 섹션)
    const rect = await findTargetSectionRect(page, idOrSelector || null);
    if (!rect || !rect.found) {
      if (idOrSelector) {
        throw new Error(`❌ Target not found by "${idOrSelector}" (Shadow DOM 포함 탐색 실패)`);
      } else {
        throw new Error('❌ Cannot locate any section element');
      }
    }

    const clip = {
      x: Math.max(0, Math.min(rect.x, rect.docW - 1)),
      y: Math.max(0, Math.min(rect.y, rect.docH - 1)),
      width: Math.max(1, Math.min(rect.w, rect.docW - rect.x)),
      height: Math.max(1, Math.min(rect.h, rect.docH - rect.y)),
    };

    await page.screenshot({
      path: output,
      type: 'webp',
      quality: 90,
      clip,
      captureBeyondViewport: true,
      omitBackground: false,
    });

    console.log(
      `✔ Saved WebP (mobile) → ${output}  |  target: ${idOrSelector || '<first section>'}`,
    );
  } finally {
    await browser.close();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
