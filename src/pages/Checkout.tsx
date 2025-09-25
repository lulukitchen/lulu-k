import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useCartStore } from '../store/cartStore';

interface CheckoutForm {
  customerName: string;
  phone: string;
  email: string;
  address: string;
  deliveryMethod: 'delivery' | 'pickup';
  paymentMethod: 'cash' | 'card' | 'paypal';
  notes: string;
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [form, setForm] = useState<CheckoutForm>({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    deliveryMethod: 'delivery',
    paymentMethod: 'cash',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');

  const currency = import.meta.env.VITE_CURRENCY || '₪';
  const deliveryFee = parseInt(import.meta.env.VITE_DELIVERY_FEE || '20');
  const freeDeliveryThreshold = 80;
  
  const subtotal = getTotalPrice();
  const needsDelivery = form.deliveryMethod === 'delivery';
  const totalDeliveryFee = needsDelivery && subtotal < freeDeliveryThreshold ? deliveryFee : 0;
  const total = subtotal + totalDeliveryFee;

  // Redirect if cart is empty
  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>תשלום - המטבח הסיני של לולו</title>
          <meta name="description" content="השלמת הזמנה ותשלום - המטבח הסיני של לולו" />
        </Helmet>
        
        <main className="min-h-screen py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-12">
              <div className="text-6xl mb-6">🛒</div>
              <h1 className="text-3xl font-bold text-chinese-red mb-4">
                העגלה ריקה
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                לא ניתן להמשיך לתשלום עם עגלה ריקה
              </p>
              <Link
                to="/menu"
                className="inline-block bg-chinese-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-chinese-darkRed transition-colors duration-200"
              >
                חזרה לתפריט
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const orderEndpoint = import.meta.env.VITE_ORDER_ENDPOINT;
      if (!orderEndpoint) {
        throw new Error('Order endpoint not configured');
      }

      const orderData = {
        type: 'order',
        customer: form,
        items: items.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          total: item.price * item.quantity
        })),
        pricing: {
          subtotal,
          deliveryFee: totalDeliveryFee,
          total
        },
        timestamp: new Date().toISOString(),
        orderNumber: Date.now().toString()
      };

      const response = await fetch(orderEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      if (response.ok) {
        setSubmitMessage('ההזמנה נשלחה בהצלחה! נחזור אליכם לאישור בהקדם.');
        clearCart();
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      console.error('Order submission error:', error);
      setSubmitMessage('שגיאה בשליחת ההזמנה. אנא נסו שוב או התקשרו אלינו ישירות.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>תשלום - המטבח הסיני של לולו</title>
        <meta name="description" content="השלמת הזמנה ותשלום - המטבח הסיני של לולו" />
      </Helmet>
      
      <main className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-chinese-red text-center mb-8">
            השלמת ההזמנה
          </h1>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="lg:order-2">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-chinese-black mb-6">
                  סיכום ההזמנה
                </h2>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">
                          {item.quantity} × {item.price}{currency}
                        </p>
                      </div>
                      <span className="font-semibold">
                        {(item.price * item.quantity)}{currency}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>סכום ביניים:</span>
                    <span>{subtotal}{currency}</span>
                  </div>
                  
                  {needsDelivery && (
                    <div className="flex justify-between">
                      <span>משלוח:</span>
                      <span>
                        {totalDeliveryFee === 0 ? (
                          <span className="text-green-600 font-semibold">חינם!</span>
                        ) : (
                          `${totalDeliveryFee}${currency}`
                        )}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-lg font-bold border-t pt-2">
                    <span>סך הכל:</span>
                    <span className="text-chinese-red">{total}{currency}</span>
                  </div>
                </div>

                {needsDelivery && subtotal < freeDeliveryThreshold && (
                  <div className="mt-4 text-sm text-chinese-red bg-chinese-lightGold p-3 rounded">
                    הוסיפו עוד {(freeDeliveryThreshold - subtotal)}{currency} למשלוח חינם!
                  </div>
                )}
              </div>
            </div>

            {/* Checkout Form */}
            <div className="lg:order-1">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-chinese-black mb-6">
                  פרטי הזמנה
                </h2>

                {/* Customer Information */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-medium text-chinese-red">פרטי הלקוח</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1">
                        שם מלא *
                      </label>
                      <input
                        type="text"
                        id="customerName"
                        name="customerName"
                        required
                        value={form.customerName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        טלפון *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      אימייל
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red"
                    />
                  </div>
                </div>

                {/* Delivery Method */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-medium text-chinese-red">שיטת משלוח</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <label className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      form.deliveryMethod === 'delivery' 
                        ? 'border-chinese-red bg-chinese-lightGold' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}>
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="delivery"
                        checked={form.deliveryMethod === 'delivery'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="text-2xl mb-2">🚗</div>
                        <div className="font-semibold">משלוח</div>
                        <div className="text-sm text-gray-600">
                          {totalDeliveryFee === 0 ? 'חינם!' : `${deliveryFee}${currency}`}
                        </div>
                      </div>
                    </label>

                    <label className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      form.deliveryMethod === 'pickup' 
                        ? 'border-chinese-red bg-chinese-lightGold' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}>
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="pickup"
                        checked={form.deliveryMethod === 'pickup'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="text-2xl mb-2">🏪</div>
                        <div className="font-semibold">איסוף עצמי</div>
                        <div className="text-sm text-gray-600">חינם</div>
                      </div>
                    </label>
                  </div>

                  {form.deliveryMethod === 'delivery' && (
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        כתובת למשלוח *
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        required
                        rows={3}
                        value={form.address}
                        onChange={handleInputChange}
                        placeholder="רחוב, מספר בית, עיר..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red"
                      />
                    </div>
                  )}
                </div>

                {/* Payment Method */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-medium text-chinese-red">אמצעי תשלום</h3>
                  
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={form.paymentMethod === 'cash'}
                        onChange={handleInputChange}
                        className="ml-2 rtl:ml-0 rtl:mr-2"
                      />
                      <span>💵 מזומן</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={form.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="ml-2 rtl:ml-0 rtl:mr-2"
                      />
                      <span>💳 כרטיס אשראי</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={form.paymentMethod === 'paypal'}
                        onChange={handleInputChange}
                        className="ml-2 rtl:ml-0 rtl:mr-2"
                      />
                      <span>💰 PayPal</span>
                    </label>
                  </div>
                </div>

                {/* Notes */}
                <div className="mb-8">
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                    הערות להזמנה
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={form.notes}
                    onChange={handleInputChange}
                    placeholder="הערות מיוחדות, בקשות..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red"
                  />
                </div>

                {/* Submit */}
                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-chinese-red text-white py-3 px-6 rounded-lg font-semibold hover:bg-chinese-darkRed transition-colors duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? 'שולח הזמנה...' : `השלם הזמנה - ${total}${currency}`}
                  </button>

                  <Link
                    to="/cart"
                    className="w-full block text-center bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200"
                  >
                    חזרה לעגלה
                  </Link>
                </div>

                {submitMessage && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    submitMessage.includes('שגיאה') 
                      ? 'bg-red-100 text-red-700 border border-red-300' 
                      : 'bg-green-100 text-green-700 border border-green-300'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;