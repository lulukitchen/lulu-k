import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useMenu } from '../hooks/useMenu';
import MenuItem from '../components/MenuItem';
import { MenuItem as MenuItemType } from '../store/cartStore';

const Menu: React.FC = () => {
  const { t } = useTranslation();
  const { items, categories, loading, error } = useMenu();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Filter items based on selected category and search term
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesCategory = !selectedCategory || item.category === selectedCategory;
      const matchesSearch = !searchTerm || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.nameEn && item.nameEn.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [items, selectedCategory, searchTerm]);

  const handleAddToCart = (item: MenuItemType) => {
    // Show a brief success message (you could implement a toast notification here)
    console.log('Added to cart:', item.name);
  };

  if (loading) {
    return (
      <>
        <Helmet>
          <title>תפריט - המטבח הסיני של לולו</title>
          <meta name="description" content="תפריט המטבח הסיני של לולו - מנות סיניות אותנטיות, נודלס, אטריות אורז ועוד" />
        </Helmet>
        
        <main className="min-h-screen py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-chinese-red"></div>
              <p className="mt-4 text-chinese-red text-xl">טוען תפריט...</p>
            </div>
          </div>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Helmet>
          <title>תפריט - המטבח הסיני של לולו</title>
          <meta name="description" content="תפריט המטבח הסיני של לולו - מנות סיניות אותנטיות, נודלס, אטריות אורז ועוד" />
        </Helmet>
        
        <main className="min-h-screen py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center py-20">
              <div className="text-6xl mb-4">😔</div>
              <h1 className="text-2xl font-bold text-chinese-red mb-4">שגיאה בטעינת התפריט</h1>
              <p className="text-gray-600 mb-6">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="bg-chinese-red text-white px-6 py-2 rounded-lg hover:bg-chinese-darkRed transition-colors"
              >
                נסה שוב
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>תפריט - המטבח הסיני של לولו</title>
        <meta name="description" content="תפריט המטבח הסיני של לולו - מנות סיניות אותנטיות, נודלס, אטריות אורז ועוד" />
      </Helmet>
      
      <main className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-chinese-red mb-4">
              {t('menu')}
            </h1>
            <p className="text-xl text-gray-600">
              גלה את המנות הטעימות שלנו - מוכנות טרי יום יום
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="חפש מנות..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chinese-red focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === '' 
                    ? 'bg-chinese-red text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                הכל ({items.length})
              </button>
              {categories.map((category) => {
                const categoryCount = items.filter(item => item.category === category).length;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      selectedCategory === category 
                        ? 'bg-chinese-red text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category} ({categoryCount})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-6">
            <p className="text-gray-600">
              מציג {filteredItems.length} מתוך {items.length} מנות
            </p>
          </div>

          {/* Menu Items Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                לא נמצאו מנות
              </h3>
              <p className="text-gray-600 mb-6">
                נסה לשנות את החיפוש או הקטגוריה
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                className="bg-chinese-red text-white px-6 py-2 rounded-lg hover:bg-chinese-darkRed transition-colors"
              >
                נקה פילטרים
              </button>
            </div>
          )}

          {/* Call to Action */}
          {items.length > 0 && (
            <div className="mt-16 text-center">
              <div className="bg-chinese-lightGold rounded-lg p-8">
                <h2 className="text-2xl font-bold text-chinese-red mb-4">
                  מוכנים להזמין?
                </h2>
                <p className="text-gray-700 mb-6">
                  התקשרו אלינו או בואו לבקר במסעדה
                </p>
                <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4 sm:justify-center rtl:space-x-reverse">
                  <a
                    href="tel:0585551234"
                    className="inline-block bg-chinese-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-chinese-darkRed transition-colors duration-200"
                  >
                    📞 התקשר עכשיו
                  </a>
                  <a
                    href="https://wa.me/972585551234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-chinese-gold text-chinese-black px-6 py-3 rounded-lg font-semibold hover:bg-chinese-lightGold transition-colors duration-200"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Menu;