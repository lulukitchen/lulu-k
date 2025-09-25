import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function Reviews() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet><title>{t('reviews')}</title></Helmet>
      <main id="main" tabIndex={-1} className="py-20 min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 gradient-text">{t('reviews')}</h1>
        </div>
      </main>
    </>
  );
}