/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module "*.svg" {
  import React from "react";
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
  
interface ImportMetaEnv {
  readonly EMAILJS_SERVICE_ID: string;
  readonly EMAILJS_TEMPLATE_ID: string;
  readonly EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}