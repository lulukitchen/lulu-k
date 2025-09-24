# Full setup script for Lulu-k project - creates and fills all files

# Create directories
New-Item -ItemType Directory -Path src, src/components, src/hooks, src/lib, src/pages, src/store, src/types, src/utils, src/__tests__, public -Force

# package.json
$packageJson = @'
{
  "name": "lulu-k",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "typecheck": "npx -p typescript tsc --noEmit",
    "test": "vitest"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.2",
    "i18next": "^23.15.1",
    "react-i18next": "^15.0.2",
    "i18next-browser-languagedetector": "^8.0.0",
    "zustand": "^4.5.6",
    "papaparse": "^5.4.1",
    "axios": "^1.7.7",
    "zod": "^3.23.8",
    "react-helmet-async": "^2.0.5"
  },
  "devDependencies": {
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "vite": "^5.4.9",
    "tailwindcss": "^3.4.14",
    "postcss": "^8.4.47",
    "autoprefixer": "^10.4.20",
    "typescript": "^5.6.3",
    "vite-plugin-pwa": "^0.20.5",
    "vitest": "^2.1.3",
    "@testing-library/react": "^16.0.1",
    "@testing-library/jest-dom": "^6.5.0",
    "jsdom": "^25.0.1",
    "@types/papaparse": "^5.3.1"
  }
}
'@
$packageJson | Set-Content -Path package.json -Encoding UTF8

# vite.config.ts
$viteConfig = @'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "Lulu's Chinese Kitchen",
        short_name: "Lulu's",
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#DC143C',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ],
  base: '/',
  build: { sourcemap: false },
  test: {
    environment: 'jsdom'
  },
});
'@
$viteConfig | Set-Content -Path vite.config.ts -Encoding UTF8

# tailwind.config.js
$tailwindConfig = @'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans Hebrew', 'Arial', 'sans-serif'],
      },
      colors: {
        'chinese-red': '#DC143C',
        'chinese-gold': '#FFD700',
        'chinese-darkRed': '#8B0000',
        'chinese-black': '#1A1A1A',
        'chinese-lightGold': '#FFF8DC',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      height: {
        '96': '24rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
'@
$tailwindConfig | Set-Content -Path tailwind.config.js -Encoding UTF8

# postcss.config.js
$postcssConfig = @'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
'@
$postcssConfig | Set-Content -Path postcss.config.js -Encoding UTF8

# tsconfig.json
$tsconfig = @'
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
'@
$tsconfig | Set-Content -Path tsconfig.json -Encoding UTF8

# tsconfig.node.json
$tsconfigNode = @'
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
'@
$tsconfigNode | Set-Content -Path tsconfig.node.json -Encoding UTF8

# .eslintrc.cjs
$eslint = @'
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
'@
$eslint | Set-Content -Path .eslintrc.cjs -Encoding UTF8

# .prettierrc
$prettier = @'
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80
}
'@
$prettier | Set-Content -Path .prettierrc -Encoding UTF8

# index.html
$indexHtml = @'
<!doctype html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>המטבח הסיני של לולו - אוכל סיני אותנטי בירושלים</title>
  <meta name="description" content="אוכל סיני אותנטי מוכן טרי בירושלים והסביבה. מנות מסורתיות מוכנות באהבה עם חומרי גלם טריים" />
  <link rel="canonical" href="https://lulu-k.com/" />
  <meta name="robots" content="index,follow" />
  <meta name="theme-color" content="#DC143C" />
  <link rel="preload" as="image" href="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" />
  <link rel="preconnect" href="https://lulu-k.com" />
  <link rel="dns-prefetch" href="https://lulu-k.com" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <script type="module" src="/src/main.tsx"></script>
</head>
<body>
  <div id="root"></div>
</body>
</html>
'@
$indexHtml | Set-Content -Path index.html -Encoding UTF8

# .env.example
$envExample = @'
VITE_SHEETS_CSV_URL=
VITE_MENU_JSON_URL=
VITE_IMAGES_BASE=https://lulu-k.com/images
VITE_FORM_ENDPOINT=
VITE_ORDER_ENDPOINT=
VITE_REVIEW_ENDPOINT=
VITE_CURRENCY=₪
VITE_DELIVERY_FEE=20
'@
$envExample | Set-Content -Path .env.example -Encoding UTF8

# public/robots.txt
$robots = @'
User-agent: *
Allow: /
Sitemap: https://lulu-k.com/sitemap.xml
'@
$robots | Set-Content -Path public/robots.txt -Encoding UTF8

# public/sitemap.xml
$sitemap = @'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://lulu-k.com/</loc></url>
  <url><loc>https://lulu-k.com/menu</loc></url>
  <url><loc>https://lulu-k.com/contact</loc></url>
</urlset>
'@
$sitemap | Set-Content -Path public/sitemap.xml -Encoding UTF8

# public/.htaccess
$htaccess = @'
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# כותרות אבטחה
Header set X-Content-Type-Options "nosniff"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
Header set Content-Security-Policy "default-src 'self'; connect-src 'self' https://docs.google.com https://script.google.com https://script.googleusercontent.com; img-src 'self' https://lulu-k.com https://images.pexels.com data:; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com data:; form-action https://script.google.com; base-uri 'self'; frame-ancestors 'self'"

# Cache static assets
<FilesMatch "\.(js|css|png|jpg|jpeg|gif|svg|webp|ico|woff2)$">
  Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>

# HTML קצר יותר
<FilesMatch "\.(html)$">
  Header set Cache-Control "public, max-age=300, must-revalidate"
</FilesMatch>
'@
$htaccess | Set-Content -Path public/.htaccess -Encoding UTF8

# Placeholder for icons and og-image
"Placeholder for icon-192.png" | Set-Content -Path public/icon-192.png -Encoding UTF8
"Placeholder for icon-512.png" | Set-Content -Path public/icon-512.png -Encoding UTF8
"Placeholder for og-image.jpg" | Set-Content -Path public/og-image.jpg -Encoding UTF8

# src/main.tsx
$main = @'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const saved = localStorage.getItem('theme');
if (saved === 'dark') document.documentElement.classList.add('dark');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
'@
$main | Set-Content -Path src/main.tsx -Encoding UTF8

# src/App.tsx
$app = @'
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import i18n from './i18n';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const About = lazy(() => import('./pages/About'));
const Reviews = lazy(() => import('./pages/Reviews'));
const Contact = lazy(() => import('./pages/Contact'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <HelmetProvider>
        <Router basename={import.meta.env.BASE_URL}>
          <div className="rtl">
            <Header />
            <ErrorBoundary>
              <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center dark:bg-gray-900">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/reviews" element={<Reviews />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
            <ScrollToTop />
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </I18nextProvider>
  );
}

export default App;
'@
$app | Set-Content -Path src/App.tsx -Encoding UTF8

# src/index.css
$indexCss = @'
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply bg-chinese-red text-white px-4 py-2 rounded hover:bg-chinese-darkRed transition-colors dark:hover:bg-red-700;
  }
  .btn-secondary {
    @apply bg-white border border-chinese-red text-chinese-red px-4 py-2 rounded hover:bg-chinese-lightGold transition-colors dark:bg-gray-800 dark:border-red-600 dark:text-red-300 dark:hover:bg-gray-700;
  }
  .rtl-space-x-3 > * + * { margin-right: 0.75rem; margin-left: 0; }
  .rtl-space-x-4 > * + * { margin-right: 1rem; margin-left: 0; }
  .rtl-space-x-6 > * + * { margin-right: 1.5rem; margin-left: 0; }
}

body {
  font-family: 'Noto Sans Hebrew', Arial, sans-serif;
  direction: rtl;
}

.gradient-text {
  background: linear-gradient(to right, #DC143C, #8B0000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.card-hover:hover {
  transform: translateY(-4px);
  transition: transform 0.3s ease;
}

.animate-bounce-gentle {
  animation: bounce 2s infinite;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
'@
$indexCss | Set-Content -Path src/index.css -Encoding UTF8

# src/i18n.ts (clean, no duplicates)
$i18n = @'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  he: {
    translation: {
      home: 'בית',
      menu: 'תפריט',
      about: 'אודות',
      reviews: 'המלצות',
      contact: 'צור קשר',
      cart: 'עגלה',
      checkout: 'תשלום',
      heroTitle: 'ברוכים הבאים למטבח הסיני של לולו',
      heroSubtitle: 'אוכל סיני אותנטי מוכן טרי בירושלים והסביבה',
      heroDesc: 'כאן תמצאו מנות סיניות מסורתיות ואהובות, מוכנות מדי יום עם החומרים הטריים והאיכותיים ביותר. אנחנו מביאים את ניחוחות המטבח הביתי של סין ישירות לשולחן שלכם, עם הקפדה על כל פרט וטעם',
      orderNow: 'הזמן עכשיו',
      viewMenu: 'צפה בתפריט',
      whyUs: 'למה לבחור בנו?',
      whyDesc: 'אוכל סיני אותנטי מוכן טרי בזמן ההזמנה. עדיף להזמין יום מראש',
      fresh: 'אוכל טרי',
      freshDesc: 'כל מנה מוכנת טרי בזמן ההזמנה',
      authentic: 'אותנטי',
      authenticDesc: 'מתכונים מסורתיים שהועברו מדור לדור',
      delivery: 'משלוחים',
      deliveryDesc: 'משלוחים לירושלים והסביבה',
      testimonials: 'המלצות לקוחות',
      testimonialsDesc: 'מה הלקוחות שלנו אומרים עלינו',
      rating: '5.0 מתוך 6 ביקורות',
      readyTaste: 'מוכנים לטעום את הטוב ביותר?',
      readyDesc: 'הזמינו עכשיו ותיהנו מאוכל סיני אותנטי מוכן טרי במיוחד עבורכם',
      fullMenu: 'צפו בתפריט המלא',
      contactUs: 'צרו קשר',
      name: 'שם',
      email: 'אימייל',
      message: 'הודעה',
      phone: 'טלפון',
      address: 'כתובת',
      send: 'שלח',
      sent: 'נשלח בהצלחה!',
      error: 'שגיאה בשליחה',
      loading: 'טוען...',
      all: 'הכול',
      search: 'חפש מנות...',
      sortName: 'שם',
      sortPrice: 'מחיר',
      seo_home_title: 'המטבח הסיני של לולו',
      seo_home_desc: 'אוכל סיני אותנטי מוכן טרי בירושלים והסביבה. מנות מסורתיות מוכנות באהבה עם חומרי גלם טריים',
      seo_menu_title: 'תפריט - המטבח הסיני של לולו',
      seo_menu_desc: 'תפריט מנות סיניות אותנטיות, מחירים ומשלוחים לירושלים',
      seo_contact_title: 'צור קשר - המטבח הסיני של לולו',
      seo_contact_desc: 'צרו קשר להזמנות אוכל סיני טרי בירושלים',
      seo_notfound_title: 'לא נמצא - המטבח הסיני של לולו',
      notFound: 'הדף לא נמצא',
      cartEmpty: 'העגלה ריקה',
      coupon: 'קופון',
      apply: 'החל',
      clear: 'נקה',
      discount: 'הנחה',
      subtotal: 'סכום ביניים',
      total: 'סך הכול',
      freeDelivery: 'משלוח חינם',
      missingDelivery: 'חסר לך {{amount}} ₪ למשלוח חינם!',
      couponError: 'קופון לא תקף',
      couponSuccess: 'קופון הוחל!',
      quantity: 'כמות',
      orderReceived: 'הזמנה התקבלה!',
      orderId: 'מספר הזמנה: {{id}}',
    },
  },
  en: {
    translation: {
      home: 'Home',
      menu: 'Menu',
      about: 'About',
      reviews: 'Reviews',
      contact: 'Contact',
      cart: 'Cart',
      checkout: 'Checkout',
      heroTitle: "Welcome to Lulu's Chinese Kitchen",
      heroSubtitle: 'Authentic Chinese Food Freshly Prepared in Jerusalem and Surroundings',
      heroDesc: 'Here you will find traditional and beloved Chinese dishes, prepared daily with the freshest and highest quality ingredients. We bring the aromas of home Chinese kitchen directly to your table, with attention to every detail and flavor',
      orderNow: 'Order Now',
      viewMenu: 'View Menu',
      whyUs: 'Why Choose Us?',
      whyDesc: 'Authentic Chinese food prepared fresh on order. Prefer to order a day in advance',
      fresh: 'Fresh Food',
      freshDesc: 'Every dish is prepared fresh on order',
      authentic: 'Authentic',
      authenticDesc: 'Traditional recipes passed down through generations',
      delivery: 'Deliveries',
      deliveryDesc: 'Deliveries to Jerusalem and surroundings',
      testimonials: 'Customer Reviews',
      testimonialsDesc: 'What our customers say about us',
      rating: '5.0 out of 6 reviews',
      readyTaste: 'Ready to Taste the Best?',
      readyDesc: 'Order now and enjoy authentic Chinese food prepared fresh just for you',
      fullMenu: 'View Full Menu',
      contactUs: 'Contact Us',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      phone: 'Phone',
      address: 'Address',
      send: 'Send',
      sent: 'Sent successfully!',
      error: 'Error sending',
      loading: 'Loading...',
      all: 'All',
      search: 'Search dishes...',
      sortName: 'Name',
      sortPrice: 'Price',
      seo_home_title: "Lulu's Chinese Kitchen",
      seo_home_desc: 'Authentic Chinese food freshly prepared in Jerusalem and surroundings. Traditional dishes made with love and fresh ingredients',
      seo_menu_title: 'Menu - Lulu\'s Chinese Kitchen',
      seo_menu_desc: 'Menu of authentic Chinese dishes, prices and deliveries to Jerusalem',
      seo_contact_title: 'Contact - Lulu\'s Chinese Kitchen',
      seo_contact_desc: 'Contact us for fresh Chinese food orders in Jerusalem',
      seo_notfound_title: 'Not Found - Lulu\'s Chinese Kitchen',
      notFound: 'Page not found',
      cartEmpty: 'Cart is empty',
      coupon: 'Coupon',
      apply: 'Apply',
      clear: 'Clear',
      discount: 'Discount',
      subtotal: 'Subtotal',
      total: 'Total',
      freeDelivery: 'Free Delivery',
      missingDelivery: 'Missing {{amount}} ₪ for free delivery!',
      couponError: 'Invalid coupon',
      couponSuccess: 'Coupon applied!',
      quantity: 'Quantity',
      orderReceived: 'Order received!',
      orderId: 'Order ID: {{id}}',
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: 'he',
    fallbackLng: 'he',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'querystring', 'navigator', 'cookie', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

const applyDir = (lng: string) => {
  const isHe = lng?.startsWith('he');
  document.documentElement.setAttribute('dir', isHe ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', isHe ? 'he' : 'en');
};
i18n.on('initialized', () => applyDir(i18n.language));
i18n.on('languageChanged', applyDir);

export default i18n;
'@
$i18n | Set-Content -Path src/i18n.ts -Encoding UTF8