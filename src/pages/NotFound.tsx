import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo_notfound_title')}</title>
      </Helmet>
      <div className="min-h-screen grid place-items-center p-12 bg-gray-50 dark:bg-gray-900">
        <main id="main" tabIndex={-1}>
          <div className="text-center">
            <h1 className="text-6xl font-bold gradient-text mb-4">{t('notFound')}</h1>
            <Link to="/" className="btn-primary">חזור לבית</Link>
          </div>
        </main>
      </div>
    </>
  );
}