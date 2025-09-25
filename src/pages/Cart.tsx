import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useCartStore } from '../store/cartStore';

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();
  
  const deliveryFee = parseInt(import.meta.env.VITE_DELIVERY_FEE || '20');
  const currency = import.meta.env.VITE_CURRENCY || '₪';
  
  const subtotal = getTotalPrice();
  const total = subtotal + (subtotal > 0 ? deliveryFee : 0);
  const freeDeliveryThreshold = 80;
  const needsForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);

  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>עגלת קניות - המטבח הסיני של לולו</title>
          <meta name="description" content="עגלת הקניות שלכם ריקה. הוסיפו מנות טעימות מהתפריט שלנו" />
        </Helmet>
        
        <main className="min-h-screen py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-12">
              <div className="text-6xl mb-6">🛒</div>
              <h1 className="text-3xl font-bold text-chinese-red mb-4">
                העגלה שלכם ריקה
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                נראה שעדיין לא הוספתם מנות לעגלה. בואו נמצא לכם משהו טעים!
              </p>
              <Link
                to="/menu"
                className="inline-block bg-chinese-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-chinese-darkRed transition-colors duration-200"
              >
                עיינו בתפריט
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>עגלת קניות - המטבח הסיני של לולו</title>
        <meta name="description" content="סקירת עגלת הקניות שלכם והמשך לתהליך ההזמנה" />
      </Helmet>
      
      <main className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-chinese-red mb-8 text-center">
            עגלת הקניות שלכם
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-chinese-black">
                      פריטים בעגלה ({items.length})
                    </h2>
                    <button
                      onClick={clearCart}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      רוקן עגלה
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center border-b pb-4 last:border-b-0">
                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-lg mr-4">
                          {item.image ? (
                            <img
                              src={`${import.meta.env.VITE_IMAGES_BASE}/${item.image}`}
                              alt={item.name}
                              className="w-full h-full object-cover rounded-lg"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-2xl">
                              🥢
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-chinese-black">{item.name}</h3>
                          <p className="text-gray-600 text-sm">{item.category}</p>
                          <p className="text-chinese-red font-semibold">
                            {item.price}{currency}
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center ml-2 rtl:ml-0 rtl:mr-2"
                          >
                            ×
                          </button>
                        </div>
                        
                        <div className="text-left rtl:text-right ml-4 rtl:ml-0 rtl:mr-4">
                          <p className="font-semibold text-chinese-red">
                            {(item.price * item.quantity)}{currency}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-chinese-black mb-4">
                  סיכום הזמנה
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">סכום ביניים:</span>
                    <span className="font-semibold">{subtotal}{currency}</span>
                  </div>
                  
                  {subtotal >= freeDeliveryThreshold ? (
                    <div className="flex justify-between text-green-600">
                      <span>משלוח:</span>
                      <span className="font-semibold">חינם! 🎉</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-600">משלוח:</span>
                        <span className="font-semibold">{deliveryFee}{currency}</span>
                      </div>
                      <div className="text-sm text-chinese-red bg-chinese-lightGold p-2 rounded">
                        הוסיפו עוד {needsForFreeDelivery}{currency} למשלוח חינם!
                      </div>
                    </>
                  )}
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>סך הכל:</span>
                      <span className="text-chinese-red">
                        {subtotal >= freeDeliveryThreshold ? subtotal : total}{currency}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Link
                    to="/checkout"
                    className="w-full bg-chinese-red text-white py-3 px-4 rounded-lg font-semibold hover:bg-chinese-darkRed transition-colors duration-200 text-center block"
                  >
                    המשך לתשלום
                  </Link>
                  <Link
                    to="/menu"
                    className="w-full bg-chinese-gold text-chinese-black py-3 px-4 rounded-lg font-semibold hover:bg-chinese-lightGold transition-colors duration-200 text-center block"
                  >
                    הוסיפו עוד מנות
                  </Link>
                </div>
                
                <div className="mt-6 text-sm text-gray-600 space-y-1">
                  <p>📞 התקשרו: 058-555-1234</p>
                  <p>🕒 זמן הכנה: 20-30 דקות</p>
                  <p>🚗 משלוח חינם מעל {freeDeliveryThreshold}{currency}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;