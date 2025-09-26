import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-chinese-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div>
              <h3 className="text-2xl font-bold text-chinese-gold">
                המטבח הסיני של לולו
              </h3>
              <p className="text-gray-300 mt-2">
                אוכל סיני אותנטי מוכן טרי בירושלים והסביבה. 
                כל המנות שלנו מוכנות באהבה עם חומרי גלם איכותיים וטריים.
              </p>
            </div>
            <div className="flex space-x-6 rtl:space-x-reverse">
              <a href="tel:0585551234" className="text-gray-300 hover:text-chinese-gold">
                <span className="sr-only">טלפון</span>
                📞
              </a>
              <a href="mailto:info@lulu-k.com" className="text-gray-300 hover:text-chinese-gold">
                <span className="sr-only">אימייל</span>
                ✉️
              </a>
              <a href="https://wa.me/972585551234" className="text-gray-300 hover:text-chinese-gold" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">WhatsApp</span>
                💬
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-chinese-gold tracking-wider uppercase">
                  ניווט
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link to="/" className="text-base text-gray-300 hover:text-white">
                      {t('home')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/menu" className="text-base text-gray-300 hover:text-white">
                      {t('menu')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-base text-gray-300 hover:text-white">
                      {t('about')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/reviews" className="text-base text-gray-300 hover:text-white">
                      {t('reviews')}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-chinese-gold tracking-wider uppercase">
                  שירות
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link to="/contact" className="text-base text-gray-300 hover:text-white">
                      {t('contact')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart" className="text-base text-gray-300 hover:text-white">
                      {t('cart')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/checkout" className="text-base text-gray-300 hover:text-white">
                      {t('checkout')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1">
              <div>
                <h3 className="text-sm font-semibold text-chinese-gold tracking-wider uppercase">
                  פרטי קשר
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li className="text-base text-gray-300">
                    📍 ירושלים, ישראל
                  </li>
                  <li className="text-base text-gray-300">
                    📞 058-555-1234
                  </li>
                  <li className="text-base text-gray-300">
                    ✉️ info@lulu-k.com
                  </li>
                  <li className="text-base text-gray-300">
                    🕒 ראשון - חמישי: 11:00-22:00
                  </li>
                  <li className="text-base text-gray-300">
                    🕒 שישי: 11:00-15:00
                  </li>
                  <li className="text-base text-gray-300">
                    🕒 מוצ"ש: 20:30-22:00
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 rtl:space-x-reverse md:order-2">
              <p className="text-base text-gray-400">
                משלוח חינם מעל ₪80 | משלוח ₪{import.meta.env.VITE_DELIVERY_FEE}
              </p>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2024 המטבח הסיני של לולו. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;