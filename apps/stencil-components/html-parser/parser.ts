// =============================================
// File: parser.ts (TypeScript, Tinto migration)
// =============================================

import * as cheerio from 'cheerio';
import type { Cheerio, CheerioAPI } from 'cheerio'; // ⬅️ 추가
import type { AnyNode, Element } from 'domhandler';
import { createHash, randomBytes, webcrypto } from 'node:crypto';

// ------------------------------
// Types & Interfaces
// ------------------------------

export interface Options {
  templateName: string; // e.g., "tinto"
  defaultSiteName: string; // e.g., "default"
  selected: string[]; // e.g., ["tinto", "default"]
  pageLabel: string; // e.g., "Home"
  inferCreatedAt?: boolean; // default: true
  allowDataOverrides?: boolean; // data-* on section overrides
  parserMode?: 'tinto' | 'auto'; // migration: focus on tinto; auto = detect tinto-section
  headAssetsMode?: 'outerHTML' | 'srcOnly'; // how to store head assets
}

export interface Manifest {
  sections?: Record<
    string,
    {
      description?: string;
      type?: string;
      category?: string;
      name?: string;
    }
  >;
}

export interface SEOImage {
  _id: string;
  author: string;
  authorLink: string;
  description: string;
  type: string; // e.g., "roov"
  url: string;
  createdAt: string; // ISO
}

export interface SEO {
  title: string;
  description: string;
  keywords: string[];
  image?: SEOImage | null;
}

export interface WebsiteBlockMeta {
  _id: string; // section id
  description: string; // human label
  type: string; // e.g., tinto-section / hero / cta
  name: string; // equals type by default
  usage: number; // default 0
  category: string; // e.g., tinto/default or overrides
}

export type BaseEntry = {
  _id: string;
  component: 'tinto-typography' | 'tinto-image' | 'tinto-button';
  role?: string;
};

// ✅ 분리: TypingEffect (effects.typing 전용)
export type TypingEffect = {
  texts?: string[];
  duration?: number;
  eraseDuration?: number;
  loop?: boolean;
  cursor?: boolean;
  unit?: 'word' | 'char' | string;
};

export type TextEntry = BaseEntry & {
  component: 'tinto-typography';
  content: string; // normalized innerHTML
  color?: string;
  font?: string;
  weight?: string;
  align?: string;
  variant?: string;
  fontSize?: string;
  effects?: {
    rolling?: boolean;
    rollSpeed?: number;
    typing?: TypingEffect;
  };
};

export type ImageEntry = BaseEntry & {
  component: 'tinto-image';
  url: string;
  alt: string;
  ratio?: string;
  fit?: string;
  rounded?: string;
  shadow?: string;
  animation?: {
    name?: string;
    duration?: number;
    repeat?: string | number;
    startOnViewport?: boolean;
    pauseOnHover?: boolean;
  };
};

export type ButtonEntry = BaseEntry & {
  component: 'tinto-button';
  label: string;
  variant?: string;
  size?: string;
  pill?: boolean;
  elevated?: boolean;
  text?: {
    family?: string;
    size?: string;
    weight?: string;
    color?: string;
  };
  radius?: string;
  href?: string;
  action?: string;
};

export type BlockFrame = {
  maxWidth?: string;
  padding?: string;
  margin?: string;
  background?: string;
  color?: string;
  heightMode?: string;
  center?: boolean;
  wrapper?: {
    padding?: string;
    radius?: string;
    shadow?: string;
    border?: string;
    background?: string;
    bgImage?: {
      src?: string;
      size?: string;
      position?: string;
      repeat?: string;
      blend?: string;
    };
    overlay?: { value?: string; opacity?: number };
    layout?: {
      direction?: string;
      justify?: string;
      align?: string;
      gap?: string;
      gapDesktop?: string;
      directionDesktop?: string;
    };
  };
};

export type Block = {
  WebsiteBlock: WebsiteBlockMeta;
  frame?: BlockFrame;
  // dynamic entry map: snake_case key → Entry
  [key: string]: unknown;
};

export interface PageObject {
  _id: string;
  Website: string;
  label: string;
  siteName: string;
  scripts: string[];
  styleSheets: string[];
  selected: string[];
  sectionCategories: string[];
  blocks: Block[];
  order: number;
  createdAt: string;
  seo: SEO;
}

export interface FinalJSON {
  message: string; // "1 page(s) found."
  siteName: string;
  pageCount: number; // 1
  template: string;
  content: PageObject[];
}

export type ReportItem = {
  code: string;
  loc?: unknown;
  extra?: unknown;
};

export interface Report {
  errors: ReportItem[];
  warnings: ReportItem[];
  stats: {
    sections: number;
    wrappers: number;
    texts: number;
    images: number;
    buttons: number;
    entries: number;
  };
}

// ------------------------------
// Constants
// ------------------------------

export const defaultOptions: Options = {
  templateName: 'tinto',
  defaultSiteName: 'default',
  selected: ['tinto', 'default'],
  pageLabel: 'Home',
  inferCreatedAt: true,
  allowDataOverrides: true,
  parserMode: 'auto',
  headAssetsMode: 'outerHTML',
};

// ------------------------------
// Public API
// ------------------------------

export function generatePageJSON(
  htmlString: string,
  opts: Options = defaultOptions,
): { pageJSON: FinalJSON; report: Report } {
  const $ = cheerio.load(htmlString, {
    xml: { xmlMode: false, decodeEntities: false },
  });

  const report = initReport();
  const headMeta = extractHeadAssets($, opts.headAssetsMode || 'outerHTML');

  const tintoCount = $('tinto-section').length;
  const mode: 'tinto' = opts.parserMode === 'tinto' || tintoCount > 0 ? 'tinto' : 'tinto'; // forced tinto for migration

  const blocks: Block[] = [];

  if (mode === 'tinto') {
    $('tinto-section').each((i: number, el: Element) => {
      report.stats.sections++;
      const { block, localReport } = buildTintoBlock($, el, i, opts);
      blocks.push(block);
      mergeReport(report, localReport);
    });
  }

  const sectionCategories = unique(blocks.map((b) => b.WebsiteBlock.category));
  const pageObj = buildPageObject(opts, headMeta, blocks, sectionCategories);
  const pageJSON: FinalJSON = wrapTopLevel(pageObj, opts);

  return { pageJSON, report };
}

// ------------------------------
// Head: scripts, styles, SEO
// ------------------------------

function extractHeadAssets(
  $: CheerioAPI,
  mode: Options['headAssetsMode'],
): {
  scripts: string[];
  styleSheets: string[];
  seo: SEO;
} {
  const scripts: string[] = [];
  $('head script').each((_, el: Element) => {
    if (mode === 'outerHTML') scripts.push($.html(el) || '');
    else {
      const src = $(el).attr('src') || '';
      if (src) scripts.push(src);
    }
  });

  const styleSheets: string[] = [];
  $('head link[rel="stylesheet"]').each((_, el: Element) => {
    if (mode === 'outerHTML') styleSheets.push($.html(el) || '');
    else {
      const href = $(el).attr('href') || '';
      if (href) styleSheets.push(href);
    }
  });

  const seoTitle = $('head title').first().text() || '';
  const seoDesc = $('head meta[name="description"]').attr('content') || '';
  const keywordsRaw = $('head meta[name="keywords"]').attr('content') || '';
  const seoKeywords = keywordsRaw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const ogImage = $('head meta[property="og:image"]').attr('content') || '';
  const seoImage: SEOImage | null = ogImage
    ? {
        _id: genObjectId(),
        author: '',
        authorLink: '',
        description: '',
        type: 'roov',
        url: ogImage,
        createdAt: nowISO(),
      }
    : null;

  return {
    scripts,
    styleSheets,
    seo: {
      title: seoTitle,
      description: seoDesc,
      keywords: seoKeywords,
      image: seoImage,
    },
  };
}

// ------------------------------
// Tinto: Section → Block
// ------------------------------

function buildTintoBlock(
  $: CheerioAPI,
  sectionEl: Element,
  sectionIndex: number,
  opts: Options,
): { block: Block; localReport: Report } {
  const local = initReport();
  const section = $(sectionEl);

  // Meta inference & overrides
  let type = 'tinto-section';
  let category = 'tinto/default';
  let name = 'tinto-section';
  let desc = 'Tinto 섹션';

  if (opts.allowDataOverrides) {
    type = section.attr('data-type') || type;
    category = section.attr('data-category') || category;
    name = section.attr('data-name') || name;
    desc = section.attr('data-desc') || desc;
  }

  // Heuristics: hero/cta (optional)
  if (type === 'tinto-section') {
    const hasH1 = section.find('tinto-typography[variant="h1"]').length > 0;
    const hasCTA = section.find('tinto-button').length > 0;
    if (hasH1 && sectionIndex === 0) type = 'hero';
    if (hasCTA && type === 'tinto-section') type = 'cta';
  }

  const secId = resolveSectionId($, section, sectionIndex);

  const websiteBlock: WebsiteBlockMeta = {
    _id: secId,
    description: desc,
    type,
    name,
    usage: 0,
    category,
  };

  const frame = extractSectionFrame($, section, local);

  const block: Block = { WebsiteBlock: websiteBlock };
  if (Object.keys(frame || {}).length > 0) block.frame = frame;

  // Collect entries (typography, image, button)
  const entries = section.find('tinto-typography, tinto-image, tinto-button');
  entries.each((_, el: Element) => {
    const tag = (el.name || '').toLowerCase();
    let entry: TextEntry | ImageEntry | ButtonEntry | null = null;

    if (tag === 'tinto-typography') entry = serializeTypography($, el, secId, local);
    else if (tag === 'tinto-image') entry = serializeImage($, el, secId, local);
    else if (tag === 'tinto-button') entry = serializeButton($, el, secId, local);
    else {
      addWarning(local, 'UNKNOWN_TINTO_COMPONENT', { sectionId: secId, tag });
    }

    if (entry) {
      const key = toSnakeKey(entry._id);
      (block as Record<string, unknown>)[key] = entry;
      local.stats.entries++;
      if (entry.component === 'tinto-typography') local.stats.texts++;
      if (entry.component === 'tinto-image') local.stats.images++;
      if (entry.component === 'tinto-button') local.stats.buttons++;
    }
  });

  return { block, localReport: local };
}

// ------------------------------
// Frames (section & first wrapper)
// ------------------------------

function extractSectionFrame($: CheerioAPI, section: Cheerio<AnyNode>, report: Report): BlockFrame {
  const frame: BlockFrame = {};
  // from <tinto-section>
  setIf(frame, 'maxWidth', section.attr('max-width'));
  setIf(frame, 'padding', section.attr('padding'));
  setIf(frame, 'margin', section.attr('margin'));
  setIf(frame, 'background', section.attr('background'));
  setIf(frame, 'color', section.attr('color'));
  setIf(frame, 'heightMode', section.attr('height-mode'));
  setIf(frame, 'center', parseBool(section.attr('center')));

  // first wrapper (if any)
  const wrapper = section.find('tinto-wrapper').first();
  if (wrapper && wrapper.length > 0) {
    report.stats.wrappers++;
    frame.wrapper = frame.wrapper || {};
    const w = frame.wrapper;
    setIf(w, 'padding', wrapper.attr('padding'));
    setIf(w, 'radius', wrapper.attr('radius'));
    setIf(w, 'shadow', wrapper.attr('shadow'));
    setIf(w, 'border', wrapper.attr('border'));
    setIf(w, 'background', wrapper.attr('background'));

    // layout
    w.layout = w.layout || {};
    setIf(w.layout!, 'direction', wrapper.attr('direction'));
    setIf(w.layout!, 'directionDesktop', wrapper.attr('direction-desktop'));
    setIf(w.layout!, 'justify', wrapper.attr('justify'));
    setIf(w.layout!, 'align', wrapper.attr('align'));
    setIf(w.layout!, 'gap', wrapper.attr('gap'));
    setIf(w.layout!, 'gapDesktop', wrapper.attr('gap-desktop'));

    // bg image via wrapper attributes
    const src = wrapper.attr('src');
    if (src) {
      w.bgImage = w.bgImage || {};
      w.bgImage.src = src;
      setIf(w.bgImage, 'size', wrapper.attr('bg-size'));
      setIf(w.bgImage, 'position', wrapper.attr('bg-position'));
      setIf(w.bgImage, 'repeat', wrapper.attr('bg-repeat'));
      setIf(w.bgImage, 'blend', wrapper.attr('bg-blend'));
    }

    const overlay = wrapper.attr('overlay');
    const overlayOpacity = wrapper.attr('overlay-opacity');
    if (overlay || overlayOpacity) {
      w.overlay = w.overlay || {};
      if (overlay) w.overlay.value = overlay;
      if (overlayOpacity) w.overlay.opacity = parseFloatSafe(overlayOpacity);
    }
  }

  return frame;
}

// ------------------------------
// Serialize components → Entries
// ------------------------------

function serializeTypography(
  $: CheerioAPI,
  el: Element,
  sectionId: string,
  report: Report,
): TextEntry | null {
  const $el = $(el);
  const id = resolveEntryId($, $el, sectionId, 'typo');
  const contentHtml = normalizeContentHtml($.html($el.contents()) || '');

  const entry: TextEntry = {
    _id: id,
    component: 'tinto-typography',
    content: contentHtml,
  };

  setIf(entry, 'color', $el.attr('color'));
  setIf(entry, 'font', $el.attr('font'));
  setIf(entry, 'weight', $el.attr('weight'));
  setIf(entry, 'align', $el.attr('align'));
  setIf(entry, 'variant', $el.attr('variant'));
  setIf(entry, 'fontSize', $el.attr('font-size'));

  // effects
  const rolling = parseBool($el.attr('rolling'));
  const rollSpeed = parseFloatSafe($el.attr('roll-speed'));

  const typingTextsRaw = $el.attr('typing-texts');
  const typing: TypingEffect | undefined = typingTextsRaw
    ? {
        texts: parseTypingTexts(typingTextsRaw, { sectionId, id }, report),
        duration: parseFloatSafe($el.attr('typing-duration')),
        eraseDuration: parseFloatSafe($el.attr('typing-erase-duration')),
        loop: parseBool($el.attr('typing-loop')),
        cursor: parseBool($el.attr('typing-cursor')),
        unit: $el.attr('typing-unit') || undefined,
      }
    : undefined;

  if (rolling || rollSpeed || typing) {
    entry.effects = {};
    if (rolling !== undefined) entry.effects.rolling = rolling;
    if (rollSpeed !== undefined) entry.effects.rollSpeed = rollSpeed;
    if (typing) entry.effects.typing = typing;
  }

  return entry;
}

function serializeImage(
  $: CheerioAPI,
  el: Element,
  sectionId: string,
  report: Report,
): ImageEntry | null {
  const $el = $(el);
  const id = resolveEntryId($, $el, sectionId, 'img');
  const src = $el.attr('src') || '';
  if (!src) addError(report, 'MISSING_SRC', { sectionId, id });

  const entry: ImageEntry = {
    _id: id,
    component: 'tinto-image',
    url: src,
    alt: $el.attr('alt') || '',
  };

  setIf(entry, 'ratio', $el.attr('ratio'));
  setIf(entry, 'fit', $el.attr('fit'));
  setIf(entry, 'rounded', $el.attr('rounded'));
  setIf(entry, 'shadow', $el.attr('shadow'));

  const animation = $el.attr('animation') || undefined;
  const duration = parseFloatSafe($el.attr('duration'));
  const repeatRaw = $el.attr('repeat');
  const startOnViewport = parseBool($el.attr('start-on-viewport'));
  const pauseOnHover = parseBool($el.attr('pause-on-hover'));

  if (
    animation ||
    duration !== undefined ||
    repeatRaw ||
    startOnViewport !== undefined ||
    pauseOnHover !== undefined
  ) {
    entry.animation = {
      name: animation,
      duration,
      repeat: parseRepeat(repeatRaw),
      startOnViewport,
      pauseOnHover,
    };
  }

  return entry;
}

function serializeButton(
  $: CheerioAPI,
  el: Element,
  sectionId: string,
  report: Report,
): ButtonEntry | null {
  const $el = $(el);
  const id = resolveEntryId($, $el, sectionId, 'btn');
  const label = $el.attr('label') || '';
  if (!label) addWarning(report, 'MISSING_LABEL', { sectionId, id });

  const entry: ButtonEntry = {
    _id: id,
    component: 'tinto-button',
    label,
  };

  setIf(entry, 'variant', $el.attr('variant'));
  setIf(entry, 'size', $el.attr('size'));
  setIf(entry, 'pill', parseBool($el.attr('pill')));
  setIf(entry, 'elevated', parseBool($el.attr('elevated')));
  setIf(entry, 'radius', $el.attr('radius'));

  const text: ButtonEntry['text'] = {};
  setIf(text, 'family', $el.attr('text-family'));
  setIf(text, 'size', $el.attr('text-size'));
  setIf(text, 'weight', $el.attr('text-weight'));
  setIf(text, 'color', $el.attr('text-color'));
  if (Object.keys(text).length > 0) entry.text = text;

  setIf(entry, 'href', $el.attr('href') || $el.attr('data-href'));
  setIf(entry, 'action', $el.attr('data-action'));

  return entry;
}

// ------------------------------
// Utilities
// ------------------------------

function toSnakeKey(idString: string): string {
  let s = idString.replace(/[^a-zA-Z0-9_-]/g, '');
  s = s.replace(/-/g, '_');
  if (/^[0-9]/.test(s)) s = 'e_' + s; // ensure not starting with digit
  return s;
}

function setIf<T extends object, K extends keyof T>(obj: T, key: K, value: unknown) {
  if (value === undefined || value === null || value === '') return;
  (obj as T)[key] = value as T[K];
}

function parseBool(v?: string): boolean | undefined {
  if (v === undefined) return undefined;
  const val = String(v).trim().toLowerCase();
  if (val === '' || val === 'true' || val === '1') return true;
  if (val === 'false' || val === '0') return false;
  // attribute presence without value => true
  return true;
}

function parseFloatSafe(v?: string): number | undefined {
  if (v === undefined) return undefined;
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : undefined;
}

function parseRepeat(v?: string): string | number | undefined {
  if (v === undefined) return undefined;
  const n = parseFloat(v as string);
  if (!Number.isNaN(n)) return n;
  return v; // e.g., "infinite"
}

function parseTypingTexts(value: string, loc: unknown, report: Report): string[] | undefined {
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  try {
    // Try JSON first
    const parsed = JSON.parse(trimmed);
    if (Array.isArray(parsed)) return parsed.map(String);
  } catch {
    // Not JSON, fall through
  }
  // heuristic: comma or | separated, optionally quoted
  const cleaned = trimmed.replace(/^\[|\]$/g, '');
  const parts = cleaned
    .split(/\s*[|,]\s*/)
    .map((s) => s.replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);
  if (parts.length === 0) {
    addWarning(report, 'UNPARSABLE_TYPING_TEXTS', loc, { value });
    return undefined;
  }
  return parts;
}

// 👉 줄바꿈은 모두 <br/> 로 정규화
function normalizeContentHtml(html: string): string {
  if (!html) return '';
  // 1) 기존 <br>, <br >, <br /> → <br/>
  let out = html.replace(/<br\s*\/?>/gi, '<br/>');
  // 2) 줄바꿈들을 \n 으로 통일 (CRLF, CR)
  out = out.replace(/\r\n?/g, '\n');
  // 3) 남은 \n 을 <br/> 로 변환
  out = out.replace(/\n/g, '<br/>');
  return out.trim();
}

function resolveSectionId($: CheerioAPI, section: Cheerio<AnyNode>, sectionIndex: number): string {
  const byId = section.attr('id');
  if (byId) return byId;
  const byData = section.attr('data-id');
  if (byData) return byData;
  // deterministic hash by DOM path within page
  const domPath = buildDomPath($, section);
  const hash = sha1Hex(domPath).slice(0, 12);
  return `sec_${sectionIndex}_${hash}`;
}

function resolveEntryId(
  $: CheerioAPI,
  $el: Cheerio<AnyNode>,
  sectionId: string,
  prefix: string,
): string {
  const byId = $el.attr('id');
  if (byId) return byId;
  const byData = $el.attr('data-id');
  if (byData) return byData;
  const path = buildDomPath($, $el);
  const hash = sha1Hex(`${sectionId}/${path}`).slice(0, 12);
  return `${prefix}_${hash}`;
}

function isElement(node: AnyNode | undefined): node is Element {
  return !!node && (node as Element).type === 'tag';
}

function buildDomPath($: CheerioAPI, node: Cheerio<AnyNode>): string {
  // Build from closest tinto-section ancestor down to the node
  const parts: string[] = [];
  let cur: Cheerio<AnyNode> | null = node;
  const root = node.closest('tinto-section');
  const rootEl = root.length > 0 ? (root.get(0) as AnyNode) : undefined;

  while (cur && cur.length > 0) {
    const n = cur.get(0) as AnyNode | undefined;
    if (!n || !isElement(n)) break;
    const tag = n.name?.toLowerCase() ?? '#';
    if (tag === '#') break;

    // nth-of-type index among siblings with same tag
    const index = cur.prevAll(tag).length + 1; // 1-based
    parts.push(`${tag}:nth-of-type(${index})`);

    if (rootEl && n === rootEl) break;
    const parent = cur.parent();
    if (!parent || parent.length === 0) break;
    cur = parent;
  }
  return parts.reverse().join(' > ');
}

function sha1Hex(input: string): string {
  return createHash('sha1').update(input).digest('hex');
}

function nowISO(): string {
  return new Date().toISOString();
}

function genObjectId(): string {
  // 24-hex char
  const bytes = Array.from(cryptoRandom(12));
  return bytes.map((b) => b.toString(16).padStart(2, '0')).join('');
}

function cryptoRandom(n: number): Uint8Array {
  // any 대신 안전한 좁은 타입으로 접근
  const g =
    (
      globalThis as unknown as {
        crypto?: { getRandomValues?: (a: Uint8Array) => void };
      }
    ).crypto ?? (webcrypto as unknown as { getRandomValues?: (a: Uint8Array) => void });

  if (g && typeof g.getRandomValues === 'function') {
    const a = new Uint8Array(n);
    g.getRandomValues(a);
    return a;
  }
  return new Uint8Array(randomBytes(n));
}

function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

function buildPageObject(
  opts: Options,
  headMeta: { scripts: string[]; styleSheets: string[]; seo: SEO },
  blocks: Block[],
  sectionCategories: string[],
): PageObject {
  const createdAt = opts.inferCreatedAt !== false ? nowISO() : nowISO();
  return {
    _id: genObjectId(),
    Website: genObjectId(),
    label: opts.pageLabel,
    siteName: opts.defaultSiteName,
    scripts: headMeta.scripts,
    styleSheets: headMeta.styleSheets,
    selected: opts.selected,
    sectionCategories,
    blocks,
    order: 0,
    createdAt,
    seo: headMeta.seo,
  };
}

function wrapTopLevel(pageObj: PageObject, opts: Options): FinalJSON {
  return {
    message: '1 page(s) found.',
    siteName: opts.defaultSiteName,
    pageCount: 1,
    template: opts.templateName,
    content: [pageObj],
  };
}

// ------------------------------
// Reporting helpers
// ------------------------------

function initReport(): Report {
  return {
    errors: [],
    warnings: [],
    stats: { sections: 0, wrappers: 0, texts: 0, images: 0, buttons: 0, entries: 0 },
  };
}

function addError(report: Report, code: string, loc?: unknown, extra?: unknown) {
  report.errors.push({ code, loc, extra });
}

function addWarning(report: Report, code: string, loc?: unknown, extra?: unknown) {
  report.warnings.push({ code, loc, extra });
}

function mergeReport(target: Report, child: Report) {
  target.errors.push(...child.errors);
  target.warnings.push(...child.warnings);
  target.stats.sections += child.stats.sections;
  target.stats.wrappers += child.stats.wrappers;
  target.stats.texts += child.stats.texts;
  target.stats.images += child.stats.images;
  target.stats.buttons += child.stats.buttons;
  target.stats.entries += child.stats.entries;
}
