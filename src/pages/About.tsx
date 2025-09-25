import React from 'react';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {

  return (
    <>
      <Helmet>
        <title>אודות - המטבח הסיני של לולו</title>
        <meta name="description" content="הכירו את המטבח הסיני של לולו - סיפור של אהבה לאוכל סיני אותנטי ומסורת משפחתית בירושלים" />
      </Helmet>
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="hero-gradient text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              סיפור המטבח הסיני של לולו
            </h1>
            <p className="text-xl md:text-2xl">
              מסורת משפחתית של אוכל סיני אותנטי בלב ירושלים
            </p>
          </div>
        </div>

        {/* Story Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-chinese-red mb-6">
                  הסיפור שלנו
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  המטבח הסיני של לולו הוא חלום שהתגשם - מקום שבו המסורת הסינית העתיקה פוגשת את הטעמים הייחודיים של ירושלים. 
                  לולו, הבעלים והשף הראשי, הגיעה לישראל עם משאלה אחת: לחלוק עם תושבי העיר את הטעמים האותנטיים של המטבח הסיני המסורתי.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  עם ניסיון של למעלה מ-15 שנה במטבחים סיניים מסורתיים, לולו מביאה איתה מתכונים משפחתיים עתיקי יומין, 
                  טכניקות בישול מיוחדות ואהבה אמיתית לאוכל איכותי וטרי.
                </p>
                <p className="text-lg text-gray-700">
                  במטבח הסיני של לולו, כל מנה מוכנת בקפידה מחומרי גלם טריים ואיכותיים, 
                  עם תשומת לב לפרטים הקטנים שהופכים כל ארוחה לחוויה בלתי נשכחת.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src={`${import.meta.env.VITE_IMAGES_BASE}/about-lulu.jpg`}
                  alt="לולו, הבעלים והשף הראשי"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="mt-4 p-6 bg-chinese-lightGold rounded-lg">
                  <h3 className="text-xl font-semibold text-chinese-red mb-2">
                    לולו - השף והבעלים
                  </h3>
                  <p className="text-gray-700">
                    "האוכל הוא שפת האהבה שלי. כל מנה שאני מכינה מגיעה מהלב"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-chinese-red text-center mb-12">
              הערכים שלנו
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-chinese-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🥢</span>
                </div>
                <h3 className="text-xl font-semibold text-chinese-black mb-4">
                  אותנטיות
                </h3>
                <p className="text-gray-700">
                  מתכונים מסורתיים שעברו דורות, מוכנים בשיטות בישול סיניות אותנטיות
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-chinese-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-chinese-black mb-4">
                  רכיבים טריים
                </h3>
                <p className="text-gray-700">
                  רק חומרי גלם טריים ואיכותיים, נבחרים בקפידה יום יום
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-chinese-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">❤️</span>
                </div>
                <h3 className="text-xl font-semibold text-chinese-black mb-4">
                  אהבה לאוכל
                </h3>
                <p className="text-gray-700">
                  כל מנה מוכנת באהבה ובתשומת לב אישית לכל פרט קטן
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-chinese-red mb-6">
                  המיקום שלנו
                </h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p className="flex items-center">
                    <span className="ml-3">📍</span>
                    ירושלים, ישראל
                  </p>
                  <p className="flex items-center">
                    <span className="ml-3">📞</span>
                    058-555-1234
                  </p>
                  <p className="flex items-center">
                    <span className="ml-3">✉️</span>
                    info@lulu-k.com
                  </p>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-chinese-black mb-4">
                    שעות פתיחה
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>ראשון - חמישי: 11:00-22:00</p>
                    <p>שישי: 11:00-15:00</p>
                    <p>מוצאי שבת: 20:30-22:00</p>
                    <p>שבת: סגור</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                  <p className="text-gray-600 text-lg">מפה תתווסף כאן</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;