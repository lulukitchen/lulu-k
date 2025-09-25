import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo_home_title')}</title>
        <meta name="description" content={t('seo_home_desc')} />
        <meta property="og:title" content={t('seo_home_title')} />
        <meta property="og:description" content={t('seo_home_desc')} />
        <link rel="canonical" href="https://lulu-k.com/" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-50 dark:bg-gray-900 hero-pattern min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-chinese-red/10 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-right">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  <span className="gradient-text">{t('heroTitle')}</span>
                </h1>
                <p className="text-xl md:text-2xl text-chinese-darkRed dark:text-chinese-lightGold mb-6 font-medium">
                  {t('heroSubtitle')}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {t('heroDesc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/menu"
                    className="btn-primary text-lg px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    {t('orderNow')}
                  </Link>
                  <Link
                    to="/menu"
                    className="btn-secondary text-lg px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    {t('viewMenu')}
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-full bg-gradient-to-br from-chinese-red to-chinese-darkRed p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="אוכל סיני אותנטי"
                      className="w-full h-full object-cover rounded-full"
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-chinese-lightGold rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-chinese-red rounded-full opacity-30 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('whyUs')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('whyDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Fresh */}
              <div className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-chinese-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {t('fresh')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('freshDesc')}
                </p>
              </div>

              {/* Authentic */}
              <div className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-chinese-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {t('authentic')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('authenticDesc')}
                </p>
              </div>

              {/* Delivery */}
              <div className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-chinese-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {t('delivery')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('deliveryDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-chinese-red text-white relative overflow-hidden">
          <div className="absolute inset-0 hero-pattern opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('readyTaste')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('readyDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="bg-white text-chinese-red px-8 py-3 rounded-lg text-lg font-semibold hover:bg-chinese-lightGold transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                {t('fullMenu')}
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-chinese-red transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {t('contactUs')}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;