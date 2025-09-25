import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Cart = () => {
  const { t } = useTranslation();
  const [cartItems] = useState([]);

  return (
    <>
      <Helmet>
        <title>עגלת קניות - {t('seo_home_title')}</title>
        <meta name="description" content="עגלת הקניות שלך במטבח הסיני של לולו" />
      </Helmet>

      <main className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {t('cart')}
          </h1>

          {cartItems.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5-5M7 13l-2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('cartEmpty')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                בואו נוסיף כמה מנות טעימות לעגלה שלכם
              </p>
              <a
                href="/menu"
                className="btn-primary px-8 py-3 text-lg"
              >
                צפה בתפריט
              </a>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              {/* Cart items would be displayed here */}
              <p className="text-gray-600 dark:text-gray-300">
                תכונת העגלה תהיה זמינה בקרוב
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Cart;