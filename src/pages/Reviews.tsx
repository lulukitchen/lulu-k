import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const Reviews: React.FC = () => {

  const reviews: Review[] = [
    {
      id: 1,
      name: "שרה כהן",
      rating: 5,
      comment: "האוכל הכי טעים שאכלתי! האטריות בדגש על הירקות הייתה מושלמת, והשירות מעולה. בהחלט נחזור!",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "דוד לוי",
      rating: 5,
      comment: "אווירה נפלאה ואוכל סיני אותנטי. הדקת העוף בסויה הייתה פנומנלית. מומלץ בחום!",
      date: "2024-01-12"
    },
    {
      id: 3,
      name: "מירי אברהם",
      rating: 4,
      comment: "מקום נהדר למשפחות. האוכל טרי וטעים, והמחירים סבירים. רק זמן ההמתנה קצת ארוך.",
      date: "2024-01-10"
    },
    {
      id: 4,
      name: "יוסף רוזן",
      rating: 5,
      comment: "מדהים! הטעמים אותנטיים לחלוטין. לולו באמת יודעת לבשל. הפלפל במילוי טעם שמיים!",
      date: "2024-01-08"
    },
    {
      id: 5,
      name: "רות גולדברג",
      rating: 5,
      comment: "השרות מעולה וידידותי. האוכל מגיע חם וטרי. זה המקום הסיני הטוב ביותר בירושלים!",
      date: "2024-01-05"
    },
    {
      id: 6,
      name: "אבי מזרחי",
      rating: 4,
      comment: "ניסיתי הרבה מנות והכל היה טעים מאוד. במיוחד אהבתי את הדקת הבקר עם ירקות.",
      date: "2024-01-03"
    }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-2xl ${i < rating ? 'text-chinese-gold' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <>
      <Helmet>
        <title>המלצות לקוחות - המטבח הסיני של לולו</title>
        <meta name="description" content="קראו המלצות לקוחות על המטבח הסיני של לולו - אוכל סיני אותנטי וטעים בירושלים" />
      </Helmet>
      
      <main className="min-h-screen py-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-chinese-red mb-6">
              המלצות הלקוחות שלנו
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              כל ביקור אצלנו הוא הזדמנות לנו לשמח ולהפתיע את הלקוחות שלנו
            </p>
            
            {/* Average Rating Display */}
            <div className="bg-chinese-lightGold rounded-lg p-6 inline-block">
              <div className="flex items-center justify-center mb-2">
                {renderStars(Math.round(averageRating))}
              </div>
              <p className="text-2xl font-bold text-chinese-red">
                {averageRating.toFixed(1)} מתוך 5
              </p>
              <p className="text-gray-600">
                מבוסס על {reviews.length} המלצות
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="bg-white rounded-lg shadow-lg p-6 border-r-4 border-chinese-gold"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-chinese-black">
                    {review.name}
                  </h3>
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.comment}"
                </p>
                <div className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString('he-IL', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto px-4 mt-16">
          <div className="bg-chinese-red text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              רוצים לחלוק איתנו את החוויה שלכם?
            </h2>
            <p className="text-xl mb-6">
              נשמח לשמוע מכם ולהכיר את החוויה שלכם במטבח הסיני של לולו
            </p>
            <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4 sm:justify-center rtl:space-x-reverse">
              <a
                href="tel:0585551234"
                className="inline-block bg-chinese-gold text-chinese-black px-8 py-3 rounded-lg font-semibold hover:bg-chinese-lightGold transition-colors duration-200"
              >
                התקשרו אלינו
              </a>
              <a
                href="mailto:info@lulu-k.com"
                className="inline-block bg-white text-chinese-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                שלחו לנו אימייל
              </a>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-chinese-red mb-2">500+</div>
              <p className="text-gray-600">לקוחות מרוצים</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-chinese-red mb-2">{averageRating.toFixed(1)}</div>
              <p className="text-gray-600">דירוג ממוצע</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-chinese-red mb-2">2+</div>
              <p className="text-gray-600">שנות פעילות</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-chinese-red mb-2">95%</div>
              <p className="text-gray-600">המלצות חיוביות</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Reviews;