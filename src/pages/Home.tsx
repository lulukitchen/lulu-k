import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo_home_title')}</title>
        <meta name="description" content={t('seo_home_desc')} />
      </Helmet>
      <main id="main" tabIndex={-1} className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold gradient-text mb-4">{t('heroTitle')}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{t('heroSubtitle')}</p>
          </div>
        </div>
      </main>
    </>
  );
}