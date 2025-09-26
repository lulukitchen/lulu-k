import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT;
      if (!formEndpoint) {
        throw new Error('Form endpoint not configured');
      }

      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          ...form,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setSubmitMessage('הודעתך נשלחה בהצלחה! נחזור אליך בהקדם.');
        setForm({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage('שגיאה בשליחת ההודעה. אנא נסה שוב או התקשר אלינו ישירות.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>צור קשר - המטבח הסיני של לולו</title>
        <meta name="description" content="צרו קשר עם המטבח הסיני של לולו - כתובת, טלפון, שעות פתיחה ופרטי הזמנות" />
      </Helmet>
      
      <main className="min-h-screen py-8">
        {/* Header */}
        <div className="hero-gradient text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              צרו איתנו קשר
            </h1>
            <p className="text-xl">
              נשמח לשמוע מכם ולענות על כל שאלה
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-chinese-red mb-8">
                פרטי קשר
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-chinese-red rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div className="mr-4">
                    <h3 className="text-lg font-semibold text-chinese-black mb-1">
                      כתובת
                    </h3>
                    <p className="text-gray-700">
                      ירושלים, ישראל<br/>
                      (הכתובת המלאה תתווסף בקרוב)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-chinese-red rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div className="mr-4">
                    <h3 className="text-lg font-semibold text-chinese-black mb-1">
                      טלפון
                    </h3>
                    <a href="tel:0585551234" className="text-chinese-red hover:text-chinese-darkRed">
                      058-555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-chinese-red rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div className="mr-4">
                    <h3 className="text-lg font-semibold text-chinese-black mb-1">
                      אימייל
                    </h3>
                    <a href="mailto:info@lulu-k.com" className="text-chinese-red hover:text-chinese-darkRed">
                      info@lulu-k.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-chinese-red rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div className="mr-4">
                    <h3 className="text-lg font-semibold text-chinese-black mb-1">
                      WhatsApp
                    </h3>
                    <a 
                      href="https://wa.me/972585551234" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-chinese-red hover:text-chinese-darkRed"
                    >
                      שלח הודעה
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-chinese-red mb-6">
                  שעות פתיחה
                </h2>
                <div className="bg-chinese-lightGold rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">ראשון - חמישי:</span>
                      <span>11:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">שישי:</span>
                      <span>11:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">מוצאי שבת:</span>
                      <span>20:30 - 22:00</span>
                    </div>
                    <div className="flex justify-between border-t pt-3">
                      <span className="font-medium">שבת:</span>
                      <span className="text-chinese-red">סגור</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-chinese-red mb-8">
                שלחו לנו הודעה
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      שם מלא *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      טלפון
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    אימייל *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    נושא *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red focus:border-transparent"
                  >
                    <option value="">בחר נושא</option>
                    <option value="order">הזמנה</option>
                    <option value="complaint">תלונה</option>
                    <option value="compliment">מחמאה</option>
                    <option value="general">פניה כללית</option>
                    <option value="catering">קייטרינג</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    הודעה *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red focus:border-transparent resize-vertical"
                    placeholder="כתבו כאן את ההודעה שלכם..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-chinese-red text-white py-3 px-6 rounded-lg font-semibold hover:bg-chinese-darkRed transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'שולח...' : 'שלח הודעה'}
                </button>

                {submitMessage && (
                  <div className={`p-4 rounded-lg ${
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

          {/* Map Placeholder */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-chinese-red text-center mb-8">
              מצאו אותנו
            </h2>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-gray-600 text-lg">מפת Google תתווסף כאן</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;