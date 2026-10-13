/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SPAS_CONTACT_API?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
