import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet><title>{t('about')}</title></Helmet>
      <main id="main" tabIndex={-1} className="py-20 min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 gradient-text">{t('about')}</h1>
          <p className="text-center text-gray-600 dark:text-gray-300">About page content</p>
        </div>
      </main>
    </>
  );
}