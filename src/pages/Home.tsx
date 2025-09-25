import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>המטבח הסיני של לולו - אוכל סיני אותנטי בירושלים</title>
        <meta name="description" content="אוכל סיני אותנטי מוכן טרי בירושלים והסביבה. מנות מסורתיות מוכנות באהבה עם חומרי גלם טריים" />
        <link rel="canonical" href="https://lulu-k.com/" />
      </Helmet>
      
      <main className="min-h-screen">
        <div className="hero-gradient text-white py-20 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            {t('heroSubtitle')}
          </p>
          <button className="bg-chinese-gold text-chinese-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-chinese-lightGold transition-colors">
            {t('orderNow')}
          </button>
        </div>
        
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-chinese-red mb-8">
              ברוכים הבאים למטבח הסיני של לולו
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              כאן תמצאו אוכל סיני אותנטי מוכן טרי יום יום. כל המנות שלנו מוכנות באהבה עם חומרי גלם איכותיים וטריים.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;