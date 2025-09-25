import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { isValidEmail, sanitizeInput } from '../utils';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.honeypot) return; // Bot detection
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('אנא מלא את כל השדות הנדרשים');
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus('כתובת אימייל לא תקינה');
      return;
    }

    setIsSubmitting(true);
    setStatus(t('loading'));

    try {
      const formPayload = new FormData();
      formPayload.append('name', sanitizeInput(formData.name));
      formPayload.append('email', sanitizeInput(formData.email));
      formPayload.append('phone', sanitizeInput(formData.phone));
      formPayload.append('message', sanitizeInput(formData.message));
      formPayload.append('timestamp', new Date().toISOString());

      const response = await fetch(import.meta.env.VITE_FORM_ENDPOINT, {
        method: 'POST',
        body: formPayload,
      });

      if (response.ok) {
        setStatus(t('sent'));
        setFormData({ name: '', email: '', phone: '', message: '', honeypot: '' });
      } else {
        throw new Error('שגיאה בשליחה');
      }
    } catch (error) {
      setStatus(t('error'));
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('seo_contact_title')}</title>
        <meta name="description" content={t('seo_contact_desc')} />
      </Helmet>

      <main className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {t('contact')}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                שלחו לנו הודעה
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chinese-red focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chinese-red focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chinese-red focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('message')} *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chinese-red focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('loading') : t('send')}
                </button>

                {status && (
                  <p className={`text-center ${status.includes('שגיאה') || status.includes('לא תקין') ? 'text-red-600' : 'text-green-600'}`}>
                    {status}
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  פרטי קשר
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-chinese-red mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a href="tel:052-123-4567" className="text-gray-700 dark:text-gray-300 hover:text-chinese-red">
                      052-123-4567
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-chinese-red mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href="mailto:info@lulu-k.com" className="text-gray-700 dark:text-gray-300 hover:text-chinese-red">
                      info@lulu-k.com
                    </a>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-chinese-red mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      אזור ירושלים והסביבה<br />
                      (משלוחים זמינים)
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  שעות פתיחה
                </h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>ראשון - חמישי: 11:00 - 22:00</p>
                  <p>שישי: 11:00 - 15:00</p>
                  <p>מוצאי שבת: 20:00 - 23:00</p>
                  <p className="text-chinese-red font-medium mt-4">
                    💡 מעדיפים להזמין יום מראש
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;