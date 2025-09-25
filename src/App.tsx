import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import i18n from './i18n';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const Contact = lazy(() => import('./pages/Contact'));
const Checkout = lazy(() => import('./pages/Checkout'));

function App() {
  return (
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <Router>
          <div className="App min-h-screen bg-white text-chinese-black">
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-chinese-red text-xl">טוען...</div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </I18nextProvider>
    </HelmetProvider>
  );
}

export default App;