import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'he' ? 'en' : 'he');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 dark:bg-gray-800">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-2 focus:bg-white focus:top-0 focus:z-50 dark:focus:bg-gray-800">Skip to content</a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center rtl-space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-chinese-red to-chinese-gold rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">לולו</span>
            </div>
            <div className="hidden sm:block text-right">
              <h1 className="text-xl font-bold gradient-text">המטבח הסיני של לולו</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Lulu's Chinese Kitchen</p>
            </div>
          </Link>

          <nav className="hidden md:flex rtl-space-x-6">
            {[
              { path: '/', key: 'home' },
              { path: '/menu', key: 'menu' },
              { path: '/about', key: 'about' },
              { path: '/reviews', key: 'reviews' },
              { path: '/contact', key: 'contact' },
              { path: '/cart', key: 'cart' },
            ].map(({ path, key }) => (
              <Link 
                key={path}
                to={path} 
                className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                  isActive(path) 
                    ? 'bg-chinese-red text-white' 
                    : 'text-gray-700 hover:text-chinese-red hover:bg-gray-100 dark:text-gray-300 dark:hover:text-red-300 dark:hover:bg-gray-700'
                }`}
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center rtl-space-x-4">
            <button onClick={toggleLang} className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center dark:hover:bg-gray-700" aria-label="Toggle language">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-600 dark:text-gray-300">
                <circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span className="sr-only">{i18n.language === 'he' ? 'Switch to English' : 'עבור לעברית'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}