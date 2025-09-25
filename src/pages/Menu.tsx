import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useMenu } from '../hooks/useMenu';

const Menu = () => {
  const { t } = useTranslation();
  const { menu, loading, error } = useMenu();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (loading) return <div className="min-h-screen bg-gray-50 flex items-center justify-center dark:bg-gray-900">{t('loading')}</div>;
  if (error) return <div className="min-h-screen bg-gray-50 flex items-center justify-center dark:bg-gray-900">שגיאה: {error}</div>;

  const categories = Array.from(new Set(menu.map((item) => item.category))).filter(Boolean);
  let filteredMenu = selectedCategory ? menu.filter((item) => item.category === selectedCategory) : menu;
  
  const byQuery = (text: string) => text.toLowerCase().includes(searchQuery.toLowerCase());
  filteredMenu = filteredMenu.filter((i) => byQuery(i.name) || i.tags.some(byQuery));

  return (
    <>
      <Helmet>
        <title>{t('seo_menu_title')}</title>
        <meta name="description" content={t('seo_menu_desc')} />
      </Helmet>

      <main className="py-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {t('menu')}
          </h1>

          {/* Search and Filters */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder={t('search')}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chinese-red focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chinese-red focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">{t('all')}</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenu.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {item.description}
                    </p>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-chinese-red">
                      ₪{item.price}
                    </span>
                    <button className="btn-primary">
                      הוסף לעגלה
                    </button>
                  </div>
                  {item.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full text-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredMenu.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                לא נמצאו מנות המתאימות לחיפוש
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Menu;