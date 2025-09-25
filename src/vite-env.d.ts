/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MENU_JSON_URL?: string;
  readonly VITE_SHEETS_CSV_URL?: string;
  readonly VITE_DELIVERY_FEE?: string;
  readonly VITE_FORM_ENDPOINT?: string;
  readonly BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}