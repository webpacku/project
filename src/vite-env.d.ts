/// <reference types="vite/client" />
// vite-env.d.ts
declare module '@/*';

interface ImportMetaEnv {
  VITE_API_URL: string;
  VITE_BASE_URL: string;
  VITE_APP_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}