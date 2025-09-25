import { useTranslation } from 'react-i18next';

export function Footer() {
  const { } = useTranslation();

  return (
    <footer className="bg-chinese-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center rtl-space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-chinese-red to-chinese-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold">לולו</span>
              </div>
              <h3 className="text-xl font-bold text-chinese-gold">המטבח הסיני של לולו</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">אוכל סיני אותנטי מוכן טרי בזמן ההזמנה. עדיף להזמין יום מראש.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-chinese-gold">פרטי התקשרות</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center rtl-space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-chinese-red">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>052-520-1978</span>
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200 transform hover:scale-105">התקשר</button>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-chinese-gold">שעות פעילות</h4>
            <div className="space-y-2">
              <div className="flex items-center rtl-space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-chinese-red">
                  <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>א'-ה' 10:00-22:00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 המטבח הסיני של לולו. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}