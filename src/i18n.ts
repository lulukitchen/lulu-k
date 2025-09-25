import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  he: {
    translation: {
      home: 'בית',
      menu: 'תפריט', 
      about: 'אודות',
      reviews: 'המלצות',
      contact: 'צור קשר',
      cart: 'עגלה',
      checkout: 'תשלום',
      heroTitle: 'ברוכים הבאים למטבח הסיני של לולו',
      heroSubtitle: 'אוכל סיני אותנטי מוכן טרי בירושלים והסביבה',
      loading: 'טוען...',
      orderNow: 'הזמן עכשיו',
      addToCart: 'הוסף לעגלה',
      price: 'מחיר',
      category: 'קטגוריה',
      description: 'תיאור',
      quantity: 'כמות',
      total: 'סך הכל',
      delivery: 'משלוח',
      pickup: 'איסוף עצמי',
      phone: 'טלפון',
      address: 'כתובת',
      email: 'אימייל',
      name: 'שם',
      submit: 'שלח',
      required: 'שדה חובה'
    }
  },
  en: {
    translation: {
      home: 'Home',
      menu: 'Menu',
      about: 'About', 
      reviews: 'Reviews',
      contact: 'Contact',
      cart: 'Cart',
      checkout: 'Checkout',
      heroTitle: 'Welcome to Lulu\'s Chinese Kitchen',
      heroSubtitle: 'Authentic Chinese food made fresh in Jerusalem and surroundings',
      loading: 'Loading...',
      orderNow: 'Order Now',
      addToCart: 'Add to Cart',
      price: 'Price',
      category: 'Category', 
      description: 'Description',
      quantity: 'Quantity',
      total: 'Total',
      delivery: 'Delivery',
      pickup: 'Pickup',
      phone: 'Phone',
      address: 'Address',
      email: 'Email',
      name: 'Name',
      submit: 'Submit',
      required: 'Required field'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'he',
    lng: 'he', // Default to Hebrew
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    }
  });

export default i18n;