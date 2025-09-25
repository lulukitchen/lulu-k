import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Checkout: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>תשלום - המטבח הסיני של לולו</title>
        <meta name="description" content="השלמת הזמנה ותשלום - המטבח הסיני של לולו" />
      </Helmet>
      
      <main className="min-h-screen py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-chinese-red text-center mb-8">
            {t('checkout')}
          </h1>
          
          <div className="text-center py-12">
            <p className="text-gray-600">
              עמוד תשלום יוטמע כאן עם זוסטנד לניהול עגלת קניות.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;