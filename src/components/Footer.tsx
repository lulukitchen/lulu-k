export const Footer = () => {

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">המטבח הסיני של לולו</h3>
            <p className="text-gray-300 leading-relaxed">
              אוכל סיני אותנטי מוכן טרי בירושלים והסביבה. מנות מסורתיות מוכנות באהבה עם חומרי גלם טריים.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">פרטי קשר</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-chinese-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                ירושלים והסביבה
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-chinese-red" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                להזמנות: 052-123-4567
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-chinese-red" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@lulu-k.com
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">שעות פתיחה</h3>
            <div className="space-y-2 text-gray-300">
              <p>ראשון - חמישי: 11:00 - 22:00</p>
              <p>שישי: 11:00 - 15:00</p>
              <p>מוצאי שבת: 20:00 - 23:00</p>
              <p className="text-chinese-red font-medium mt-4">
                מעדיפים להזמין יום מראש
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 המטבח הסיני של לולו. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};