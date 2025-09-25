import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Checkout = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>תשלום - {t('seo_home_title')}</title>
        <meta name="description" content="השלם את ההזמנה שלך במטבח הסיני של לולו" />
      </Helmet>

      <main className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {t('checkout')}
          </h1>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              תכונת התשלום תהיה זמינה בקרוב
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              כרגע, אנא צרו איתנו קשר טלפונית להזמנות
            </p>
            <a
              href="tel:052-123-4567"
              className="btn-primary px-8 py-3 text-lg"
            >
              התקשרו: 052-123-4567
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;