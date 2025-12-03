declare module 'node-html-to-image' {
  export interface NodeHtmlToImageOptions {
    html: string;
    output: string;
    type?: 'png' | 'jpeg' | 'webp';
    quality?: number;
    selector?: string;
    puppeteerArgs?: { args?: string[] };
    beforeScreenshot?: (page: unknown) => Promise<void>;
  }

  export default function nodeHtmlToImage(options: NodeHtmlToImageOptions): Promise<void>;
}
