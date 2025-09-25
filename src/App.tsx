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
              <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center dark:bg-gray-900">טוען...</div>}>
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