// src/capture-section-to-webm.mjs
// Usage(간단):
//   node ./src/capture-section-to-webm.mjs "<URL>"
// 고급:
//   node ./src/capture-section-to-webm.mjs "<URL>" "tinto-section:first-of-type" 60 "output/video/hero.mp4" \
//     --duration=5 --format=mp4 --codec=h264 --crf=23 --preset=slow --gop=120 \
//     --viewport-width=390 --viewport-height=844 --dpr=3 --scale-width=720
//
// 기본값
// - FPS: 60
// - DURATION: 5초
// - SELECTOR: tinto-section:first-of-type
// - OUTPUT: output/video/capture-YYYYMMDD-HHMMSS.mp4 (자동 생성, 확장자에 따라 mp4/webm 설정)
// 핵심
// - 섹션 영역만 캡처 → ffmpeg로 바로 인코딩(파이프, 임시 PNG 없음)
// - tinto-image[animation] / ds-image[animation] → repeat="infinite" + 즉시 시작 + 클론 교체
// - 애니메이션 속도 = 화면 그대로: Animation.setPlaybackRate(1) + wall-clock 프레임 타이밍
// - MP4(H.264) 기본: yuv420p, even 크기 보정, x264 튜닝

import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import puppeteer from 'puppeteer';

const PAGE_URL = process.argv[2];
const SECTION_SEL = process.argv[3] || 'tinto-section:first-of-type';
const FPS = Number(process.argv[4] || 60);

function ts() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}
const DEFAULT_OUT = path.join('output', 'video', `capture-${ts()}.mp4`);
const OUT_PATH = process.argv[5] || DEFAULT_OUT;

if (!PAGE_URL) {
  console.error(
    'Usage: node ./src/capture-section-to-webm.mjs "<URL>" [selector=tinto-section:first-of-type] [fps=60] [out]\n' +
      'Flags: --duration=5 --format=mp4|webm --codec=h264|vp9|av1 --crf=23 --preset=slow --gop=120 --viewport-width=390 --viewport-height=844 --dpr=3 --scale-width=720',
  );
  process.exit(1);
}

// ----- flags -----
const flags = Object.fromEntries(
  process.argv.slice(6).map((s) => {
    const m = /^--([^=]+)(?:=(.*))?$/.exec(s);
    return m ? [m[1], m[2] ?? true] : [s, true];
  }),
);

// ✅ 모바일 기본 뷰포트/배율 (필요 시 플래그로 오버라이드)
const VIEW_W = flags['viewport-width'] ? Number(flags['viewport-width']) : 390;
const VIEW_H = flags['viewport-height'] ? Number(flags['viewport-height']) : 844;
const DPR = flags['dpr'] ? Number(flags['dpr']) : 3;
const SCALE_W = flags['scale-width'] ? Number(flags['scale-width']) : null;

// 컨테이너/코덱/품질 기본값
const ext = OUT_PATH.toLowerCase().endsWith('.mp4')
  ? 'mp4'
  : OUT_PATH.toLowerCase().endsWith('.webm')
    ? 'webm'
    : null;
const FORMAT = (flags['format'] ?? ext ?? 'mp4').toLowerCase();
let CODEC = (flags['codec'] ?? (FORMAT === 'mp4' ? 'h264' : 'vp9')).toLowerCase();

// ✅ 5초 기본 길이
const DURATION = flags['duration'] != null ? Number(flags['duration']) : 5;
// 루프 이음새 제거용 마지막 프레임 컷 끄기: --no-seamcut
const NO_SEAMCUT = Boolean(flags['no-seamcut']);

// 품질/속도
const CRF =
  flags['crf'] != null ? Number(flags['crf']) : CODEC === 'av1' ? 32 : CODEC === 'h264' ? 23 : 35;
const PRESET = (flags['preset'] ?? 'slow').toString();
const SPEED =
  flags['speed'] != null ? Number(flags['speed']) : CODEC === 'vp9' ? 2 : CODEC === 'av1' ? 6 : 0;
const GOP = flags['gop'] != null ? Number(flags['gop']) : Math.max(12, FPS * 2);

const DECIMATE = Boolean(flags['decimate']);

const PADDING = 8;
const HEADLESS = 'new';

// 모바일 UA
const MOBILE_UA =
  process.env.UA ||
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

async function hasBin(cmd) {
  return new Promise((res) => {
    const p = spawn(cmd, ['-version'], { stdio: 'ignore' });
    p.on('error', () => res(false));
    p.on('close', () => res(true));
  });
}
async function ensureDirFor(filePath) {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
}

async function main() {
  if (!(await hasBin('ffmpeg'))) {
    console.error('❌ ffmpeg not found. Install ffmpeg first.');
    process.exit(1);
  }
  if (FORMAT === 'mp4' && CODEC !== 'h264') {
    console.warn(`⚠️ mp4는 h264 호환성이 가장 좋습니다. codec=${CODEC} → h264로 강제합니다.`);
    CODEC = 'h264';
  }

  await ensureDirFor(OUT_PATH);

  const browser = await puppeteer.launch({
    headless: HEADLESS,
    defaultViewport: {
      width: VIEW_W,
      height: VIEW_H,
      deviceScaleFactor: DPR,
      isMobile: true,
      hasTouch: true,
    },
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--autoplay-policy=no-user-gesture-required',
      '--disable-background-timer-throttling',
      '--disable-backgrounding-occluded-windows',
      '--disable-renderer-backgrounding',
      '--enable-precise-memory-info',
      `--window-size=${VIEW_W},${VIEW_H}`,
      '--hide-scrollbars',
      '--force-color-profile=srgb',
    ],
  });

  try {
    const page = await browser.newPage();

    // 모바일 UA + 미디어 특성
    await page.setUserAgent(MOBILE_UA);
    const client = await page.target().createCDPSession();
    await client.send('Emulation.setEmulatedMedia', {
      features: [
        { name: 'prefers-reduced-motion', value: 'no-preference' },
        { name: 'prefers-color-scheme', value: 'light' },
      ],
    });

    // ✅ 애니메이션을 화면 속도 그대로(1x) 재생 보장
    try {
      await client.send('Animation.enable');
      await client.send('Animation.setPlaybackRate', { playbackRate: 1 });
      await client.send('Emulation.setCPUThrottlingRate', { rate: 1 });
      await client.send('Page.setWebLifecycleState', { state: 'active' });
    } catch {}

    await page.goto(PAGE_URL, { waitUntil: 'networkidle2', timeout: 30000 });
    await page.bringToFront();

    // meta viewport 보정(없으면 추가 → 모바일 레이아웃 유도)
    await page.evaluate(() => {
      if (!document.querySelector('meta[name="viewport"]')) {
        const m = document.createElement('meta');
        m.name = 'viewport';
        m.content = 'width=device-width, initial-scale=1, viewport-fit=cover';
        document.head.appendChild(m);
      }
    });

    // 폰트/이미지 짧게 대기
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

    // 섹션/애니메이션 준비
    const prep = await page.evaluate(
      async ({ SECTION_SEL, PADDING }) => {
        const rAF = () => new Promise(requestAnimationFrame);
        const sec = document.querySelector(SECTION_SEL);
        if (!sec) return null;

        sec.scrollIntoView({ behavior: 'auto', block: 'center' });

        // tinto-image / ds-image → 무한 반복 + 즉시 시작 + 타임라인 0에서 시작
        const imgs = [
          ...Array.from(sec.querySelectorAll('tinto-image[animation]')),
          ...Array.from(sec.querySelectorAll('ds-image[animation]')),
        ];
        let maxSeconds = 1;
        imgs.forEach((el) => {
          el.setAttribute('repeat', 'infinite');
          el.setAttribute('play', 'true');
          el.removeAttribute('start-on-viewport');
          el.removeAttribute('data-start-on-viewport');
          el.removeAttribute('pause-on-hover');

          // 타임라인 0 보장(재시작)
          const clone = el.cloneNode(true);
          el.replaceWith(clone);

          const dur =
            parseFloat(
              clone.getAttribute('duration') || clone.getAttribute('data-duration') || '1',
            ) || 1;
          maxSeconds = Math.max(maxSeconds, dur);
        });

        window.dispatchEvent(new Event('scroll'));
        window.dispatchEvent(new Event('resize'));

        await rAF();
        await rAF();

        const rect = sec.getBoundingClientRect();
        const docX = Math.floor(rect.left + window.scrollX);
        const docY = Math.floor(rect.top + window.scrollY);
        const docW = Math.ceil(rect.width);
        const docH = Math.ceil(rect.height);

        const clip = {
          x: Math.max(0, docX - PADDING),
          y: Math.max(0, docY - PADDING),
          w: Math.max(1, docW + PADDING * 2),
          h: Math.max(1, docH + PADDING * 2),
        };

        const totalMs = Math.round((maxSeconds + 0.2) * 1000);
        return { totalMs, clip };
      },
      { SECTION_SEL, PADDING },
    );

    if (!prep) {
      console.error(`❌ Section not found: ${SECTION_SEL}`);
      process.exit(1);
    }

    // 총 캡처 시간: 기본 5초 (또는 --duration)
    const totalMs = Math.round(DURATION * 1000);

    // 프레임 수/간격 (wall-clock 기반 → 재생 속도 = 실제 화면)
    const exactFrames = Math.floor((totalMs / 1000) * FPS);
    const frames = NO_SEAMCUT ? Math.max(1, exactFrames) : Math.max(1, exactFrames - 1);
    const frameDelayMs = 1000 / FPS;

    console.log(
      `🎬 Capturing "${SECTION_SEL}" ${(totalMs / 1000).toFixed(2)}s @ ${FPS}fps → ${frames} frames`,
    );
    console.log(
      `📱 Viewport: ${VIEW_W}x${VIEW_H} @ DPR=${DPR}  |  ScaleWidth: ${SCALE_W ?? 'none'}`,
    );
    console.log(
      `🎞️ Format=${FORMAT.toUpperCase()}  Codec=${CODEC.toUpperCase()}  CRF=${CRF}  Preset=${PRESET}  GOP=${GOP}`,
    );
    console.log(`➡️ Output: ${OUT_PATH}`);

    // ---- ffmpeg filter chain (짝수 보정 포함) ----
    const vf = [];
    if (SCALE_W) vf.push(`scale=${SCALE_W}:-2:flags=lanczos`);
    vf.push('pad=ceil(iw/2)*2:ceil(ih/2)*2');
    vf.push('setsar=1');
    if (DECIMATE) vf.push('mpdecimate=hi=768:lo=256:frac=0.33');
    const vfArgs = ['-vf', vf.join(',')];

    // ---- ffmpeg codec args ----
    let codecArgs;
    if (CODEC === 'h264') {
      codecArgs = [
        '-c:v',
        'libx264',
        '-pix_fmt',
        'yuv420p',
        '-profile:v',
        'high',
        '-crf',
        String(CRF),
        '-preset',
        PRESET,
        '-g',
        String(GOP),
        '-bf',
        '3',
        '-b_strategy',
        '2',
        '-psy-rd',
        '1.0:0.15',
        '-tune',
        'animation',
        '-movflags',
        '+faststart',
        '-x264-params',
        [
          'aq-mode=3',
          'aq-strength=1.0',
          'me=umh',
          'subme=7',
          'merange=24',
          'trellis=2',
          'ref=5',
          'deblock=1:1',
          'rc-lookahead=40',
          'b-adapt=2',
          'keyint=' + String(GOP),
          'min-keyint=' + String(Math.max(12, Math.floor(GOP / 4))),
          'scenecut=40',
        ].join(':'),
        '-an',
      ];
    } else if (CODEC === 'av1') {
      codecArgs = [
        '-c:v',
        'libaom-av1',
        '-b:v',
        '0',
        '-crf',
        String(CRF),
        '-cpu-used',
        String(SPEED),
        '-pix_fmt',
        'yuv420p',
        '-g',
        String(GOP),
        '-an',
      ];
    } else {
      codecArgs = [
        '-c:v',
        'libvpx-vp9',
        '-b:v',
        '0',
        '-crf',
        String(CRF),
        '-pix_fmt',
        'yuv420p',
        '-row-mt',
        '1',
        '-tile-columns',
        '2',
        '-tile-rows',
        '1',
        '-cpu-used',
        String(SPEED),
        '-deadline',
        'good',
        '-g',
        String(GOP),
        '-an',
      ];
    }

    const ff = spawn(
      'ffmpeg',
      [
        '-loglevel',
        'error',
        '-y',
        '-f',
        'image2pipe',
        '-framerate',
        String(FPS),
        '-i',
        '-',
        ...vfArgs,
        ...codecArgs,
        OUT_PATH,
      ],
      { stdio: ['pipe', 'inherit', 'inherit'] },
    );

    const ffErr = new Promise((_, reject) => {
      ff.on('error', reject);
      ff.stdin.on('error', reject);
    });

    // ✅ wall-clock 프레임 스케줄링 → 화면 재생속도 그대로 기록
    const t0 = Date.now();
    for (let i = 0; i < frames; i++) {
      const target = t0 + Math.round((i + 1) * frameDelayMs);
      const wait = Math.max(0, target - Date.now());
      if (wait > 0) await new Promise((r) => setTimeout(r, wait));

      const buf = await page.screenshot({
        clip: {
          x: prep.clip.x,
          y: prep.clip.y,
          width: prep.clip.w,
          height: prep.clip.h,
        },
        captureBeyondViewport: true,
        omitBackground: false,
        type: 'png',
        encoding: 'binary',
      });
      if (!ff.stdin.write(buf)) await once(ff.stdin, 'drain');
    }
    ff.stdin.end();

    await Promise.race([
      new Promise((resolve, reject) => {
        ff.on('close', (code) =>
          code === 0 ? resolve() : reject(new Error(`ffmpeg exited ${code}`)),
        );
      }),
      ffErr,
    ]);

    const stat = await fs.stat(OUT_PATH);
    console.log(`✅ Done. Saved (${(stat.size / 1024).toFixed(1)} KB): ${OUT_PATH}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error('Unhandled error:', err);
  process.exit(1);
});
