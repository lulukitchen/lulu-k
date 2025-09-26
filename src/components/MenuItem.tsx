import React from 'react';
import { MenuItem as MenuItemType, useCartStore } from '../store/cartStore';

interface MenuItemProps {
  item: MenuItemType;
  onAddToCart?: (item: MenuItemType) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onAddToCart }) => {
  const { addItem } = useCartStore();
  const currency = import.meta.env.VITE_CURRENCY || '₪';
  const imageBase = import.meta.env.VITE_IMAGES_BASE || '';

  const handleAddToCart = () => {
    addItem(item);
    if (onAddToCart) {
      onAddToCart(item);
    }
  };

  const getImageUrl = (imagePath: string): string => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http')) return imagePath;
    return `${imageBase}/${imagePath}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 bg-gray-200">
        {item.image ? (
          <img
            src={getImageUrl(item.image)}
            alt={item.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-4xl text-chinese-gold">🥢</div>';
              }
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl text-chinese-gold">
            🥢
          </div>
        )}
        
        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-1">
            {item.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="bg-chinese-red text-white text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Price Badge */}
        <div className="absolute bottom-2 left-2 bg-chinese-gold text-chinese-black px-3 py-1 rounded-full font-bold">
          {item.price}{currency}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-chinese-black mb-1">
            {item.name}
          </h3>
          {item.nameEn && item.nameEn !== item.name && (
            <p className="text-sm text-gray-600 italic">
              {item.nameEn}
            </p>
          )}
        </div>
        
        <p className="text-sm text-chinese-red font-medium mb-2">
          {item.category}
        </p>
        
        {item.description && (
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            {item.description}
          </p>
        )}
        
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-chinese-red text-white py-2 px-4 rounded-lg font-semibold hover:bg-chinese-darkRed transition-colors duration-200 flex items-center justify-center"
        >
          <span className="ml-2">🛒</span>
          הוסף לעגלה
        </button>
      </div>
    </div>
  );
};

export default MenuItem;