/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHEETS_CSV_URL: string;
  readonly VITE_MENU_JSON_URL: string;
  readonly VITE_IMAGES_BASE: string;
  readonly VITE_FORM_ENDPOINT: string;
  readonly VITE_ORDER_ENDPOINT: string;
  readonly VITE_REVIEW_ENDPOINT: string;
  readonly VITE_CURRENCY: string;
  readonly VITE_DELIVERY_FEE: string;
  readonly BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}