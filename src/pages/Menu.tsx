import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function Menu() {
  const { t } = useTranslation();
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);
  const [menu] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [q, setQ] = useState('');
  const [sort, setSort] = useState<'name' | 'price'>('name');

  if (loading) return (
    <main id="main" tabIndex={-1} className="py-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">Loading...</div>
    </main>
  );

  if (error) return <div className="min-h-screen bg-gray-50 flex items-center justify-center dark:bg-gray-900">שגיאה: {error}</div>;

  const categories = Array.from(new Set(menu.map((item: any) => item.category))).filter(Boolean);
  let filteredMenu = selectedCategory ? menu.filter((item: any) => item.category === selectedCategory) : menu;
  
  const byQuery = (s: string) => s?.toLowerCase().includes(q.toLowerCase());
  filteredMenu = filteredMenu.filter((i: any) => byQuery(i.name) || i.tags?.some(byQuery));

  const sorted = filteredMenu.sort((a: any, b: any) => {
    if (sort === 'price') return a.price - b.price;
    return a.name.localeCompare(b.name, 'he');
  });

  return (
    <>
      <Helmet>
        <title>{t('seo_menu_title')}</title>
        <meta name="description" content={t('seo_menu_desc')} />
      </Helmet>
      <main id="main" tabIndex={-1} className="py-20 min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 gradient-text">{t('menu')}</h1>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <input
              type="search" value={q} onChange={(e) => setQ(e.target.value)}
              placeholder={t('search')} className="border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              aria-label={t('search')}
            />
            <select value={sort} onChange={(e) => setSort(e.target.value as 'name' | 'price')} className="border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <option value="name">{t('sortName')}</option>
              <option value="price">{t('sortPrice')}</option>
            </select>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button onClick={() => setSelectedCategory('')} className={`px-4 py-2 rounded ${!selectedCategory ? 'bg-chinese-red text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
              {t('all')}
            </button>
            {categories.map((cat: string) => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded ${selectedCategory === cat ? 'bg-chinese-red text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sorted.length === 0 && <p className="col-span-full text-center text-gray-500">אין מנות להציג</p>}
          </div>
        </div>
      </main>
    </>
  );
}