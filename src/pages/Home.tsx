import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: "🥢",
      title: "אוכל סיני אותנטי",
      description: "מתכונים מסורתיים שעברו מדור לדור, מוכנים בשיטות בישול סיניות אותנטיות"
    },
    {
      icon: "🌱",
      title: "רכיבים טריים",
      description: "רק חומרי גלם טריים ואיכותיים, נבחרים בקפידה יום יום"
    },
    {
      icon: "🚗",
      title: "משלוח מהיר",
      description: "משלוח חינם מעל ₪80, והגעה תוך 30-45 דקות לכל הסביבה"
    },
    {
      icon: "👨‍🍳",
      title: "שף מקצועי",
      description: "לולו, השף הראשי שלנו, מביאה ניסיון של למעלה מ-15 שנה"
    }
  ];

  const testimonials = [
    {
      name: "שרה כהן",
      comment: "האוכל הכי טעים שאכלתי! האטריות מושלמות והשירות מעולה.",
      rating: 5
    },
    {
      name: "דוד לוי", 
      comment: "אווירה נפלאה ואוכל סיני אותנטי. מומלץ בחום!",
      rating: 5
    },
    {
      name: "מירי אברהם",
      comment: "מקום נהדר למשפחות. האוכל טרי וטעים.",
      rating: 4
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-chinese-gold ${i < rating ? '' : 'opacity-30'}`}>
        ★
      </span>
    ));
  };

  return (
    <>
      <Helmet>
        <title>המטבח הסיני של לולו - אוכל סיני אותנטי בירושלים</title>
        <meta name="description" content="אוכל סיני אותנטי מוכן טרי בירושלים והסביבה. מנות מסורתיות מוכנות באהבה עם חומרי גלם טריים" />
        <link rel="canonical" href="https://lulu-k.com/" />
      </Helmet>
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="hero-gradient text-white py-20 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            {t('heroSubtitle')}
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center rtl:space-x-reverse">
            <Link
              to="/menu"
              className="inline-block bg-chinese-gold text-chinese-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-chinese-lightGold transition-colors"
            >
              {t('menu')}
            </Link>
            <a
              href="tel:0585551234"
              className="inline-block bg-white text-chinese-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              📞 התקשרו עכשיו
            </a>
          </div>
        </div>

        {/* Welcome Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-chinese-red mb-8">
              ברוכים הבאים למטבח הסיני של לולו
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              כאן תמצאו אוכל סיני אותנטי מוכן טרי יום יום. כל המנות שלנו מוכנות באהבה עם חומרי גלם איכותיים וטריים.
              לולו, השף הראשי שלנו, מביאה איתها מתכונים משפחתיים עתיקי יומין וטכניקות בישול מיוחדות.
            </p>
            
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-chinese-red mb-2">500+</div>
                <p className="text-gray-600">לקוחות מרוצים</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-chinese-red mb-2">15+</div>
                <p className="text-gray-600">שנות ניסיון</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-chinese-red mb-2">4.8</div>
                <p className="text-gray-600">דירוג ממוצע</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-chinese-red mb-2">30+</div>
                <p className="text-gray-600">מנות בתפריט</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-chinese-red text-center mb-12">
              למה לבחור בנו?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-chinese-black mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-chinese-red text-center mb-12">
              מה הלקוחות שלנו אומרים
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-chinese-lightGold rounded-lg p-6">
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="font-semibold text-chinese-black">
                    {testimonial.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/reviews"
                className="inline-block bg-chinese-red text-white px-6 py-3 rounded-lg hover:bg-chinese-darkRed transition-colors"
              >
                קראו עוד המלצות
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 hero-gradient text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              מוכנים להזמין?
            </h2>
            <p className="text-xl mb-8">
              אל תחכו - הזמינו עכשיו ותהנו מאוכל סיני אותנטי וטעים
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center rtl:space-x-reverse">
              <Link
                to="/menu"
                className="inline-block bg-chinese-gold text-chinese-black px-8 py-3 rounded-lg font-semibold hover:bg-chinese-lightGold transition-colors"
              >
                {t('orderNow')}
              </Link>
              <Link
                to="/menu"
                className="inline-block bg-chinese-gold text-chinese-black px-8 py-3 rounded-lg font-semibold hover:bg-chinese-lightGold transition-colors"
              >
                עיינו בתפריט
              </Link>
              <a
                href="tel:0585551234"
                className="inline-block bg-white text-chinese-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                התקשרו להזמנה
              </a>
              <a
                href="https://wa.me/972585551234"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;