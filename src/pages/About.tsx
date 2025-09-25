import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>אודות - {t('seo_home_title')}</title>
        <meta name="description" content="המטבח הסיני של לולו - סיפור המסעדה, הצוות והמנות האותנטיות שלנו" />
      </Helmet>

      <main className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {t('about')}
          </h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              הסיפור שלנו
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              המטבח הסיני של לולו הוא מקום שבו המסורת הסינית האותנטית פוגשת את הטעמים המקומיים. 
              אנחנו מאמינים שאוכל טוב מתחיל עם חומרי גלם איכותיים ומוכן באהבה.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              כל מנה במטבח שלנו מוכנת טרי לפי הזמנה, תוך שימוש במתכונים מסורתיים שמועברים דור אחר דור. 
              אנחנו גאים להביא לכם טעמים אותנטיים של המטבח הסיני הביתי.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                המטבח שלנו
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                במטבח שלנו אנחנו משתמשים רק בחומרי גלם טריים ואיכותיים. 
                כל מנה מוכנת בקפידה ובתשומת לב לכל פרט.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                השירות שלנו
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                אנחנו מספקים שירות משלוחים לירושלים והסביבה, 
                ומעדיפים שתזמינו יום מראש כדי להבטיח את הטריות והאיכות.
              </p>
            </div>
          </div>

          <div className="bg-chinese-red text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              מוכנים להזמין?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              צרו איתנו קשר להזמנות ושאלות
            </p>
            <a
              href="tel:052-123-4567"
              className="inline-block bg-white text-chinese-red px-8 py-3 rounded-lg font-semibold hover:bg-chinese-lightGold transition-colors"
            >
              התקשרו: 052-123-4567
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;