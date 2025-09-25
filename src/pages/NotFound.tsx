import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo_notfound_title')}</title>
        <meta name="description" content="הדף שחיפשת לא נמצא" />
      </Helmet>

      <main className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-chinese-red mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('notFound')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              הדף שחיפשת לא קיים או שהוסר
            </p>
          </div>

          <div className="mb-12">
            <svg className="w-32 h-32 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.71-2.709M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728" />
            </svg>
          </div>

          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block btn-primary px-8 py-3 text-lg mr-4"
            >
              חזור לעמוד הבית
            </Link>
            <Link
              to="/menu"
              className="inline-block btn-secondary px-8 py-3 text-lg"
            >
              צפה בתפריט
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;