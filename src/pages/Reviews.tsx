import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Reviews = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      id: '1',
      name: 'דוד כהן',
      rating: 5,
      comment: 'אוכל סיני מעולה! הטעמים אותנטיים וטריים. בהחלט נזמין שוב.',
      date: '2024-01-15'
    },
    {
      id: '2', 
      name: 'שרה לוי',
      rating: 5,
      comment: 'המנות מגיעות חמות וטעימות. השירות מצוין והמשלוח מהיר.',
      date: '2024-01-10'
    },
    {
      id: '3',
      name: 'מיכאל אברהם',
      rating: 4,
      comment: 'אוכל טוב מאוד, מחירים הוגנים. מומלץ לכולם!',
      date: '2024-01-05'
    }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <>
      <Helmet>
        <title>ביקורות - {t('seo_home_title')}</title>
        <meta name="description" content="ביקורות לקוחות על המטבח הסיני של לולו - קראו מה אומרים הלקוחות שלנו" />
      </Helmet>

      <main className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {t('reviews')}
          </h1>

          {/* Overall Rating */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="flex mr-2">
                {renderStars(Math.round(averageRating))}
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {averageRating.toFixed(1)}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              מבוסס על {reviews.length} ביקורות
            </p>
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {review.name}
                    </h3>
                    <div className="flex items-center mt-1">
                      <div className="flex mr-2">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(review.date).toLocaleDateString('he-IL')}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-chinese-red text-white rounded-lg p-8 mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              חווה בעצמך את הטעמים המעולים
            </h2>
            <p className="text-lg mb-6 opacity-90">
              הצטרף למאות לקוחות מרוצים
            </p>
            <a
              href="/menu"
              className="inline-block bg-white text-chinese-red px-8 py-3 rounded-lg font-semibold hover:bg-chinese-lightGold transition-colors"
            >
              צפה בתפריט
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Reviews;