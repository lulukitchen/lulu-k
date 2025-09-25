import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/menu', label: t('menu') },
    { path: '/about', label: t('about') },
    { path: '/reviews', label: t('reviews') },
    { path: '/contact', label: t('contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-chinese-red">
                המטבח הסיני של לולו
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 rtl:space-x-reverse">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-chinese-red text-white'
                      : 'text-chinese-black hover:bg-chinese-lightGold hover:text-chinese-red'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/cart"
                className="bg-chinese-gold text-chinese-black px-4 py-2 rounded-md text-sm font-medium hover:bg-chinese-lightGold transition-colors duration-200 flex items-center"
              >
                🛒 {t('cart')}
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-chinese-black hover:text-chinese-red hover:bg-chinese-lightGold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-chinese-red"
              aria-expanded="false"
            >
              <span className="sr-only">פתח תפריט ראשי</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-chinese-red text-white'
                    : 'text-chinese-black hover:bg-chinese-lightGold hover:text-chinese-red'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/cart"
              className="block bg-chinese-gold text-chinese-black px-3 py-2 rounded-md text-base font-medium hover:bg-chinese-lightGold transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              🛒 {t('cart')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;