import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(t('loading'));
    // Mock form submission
    setTimeout(() => {
      setStatus(t('sent'));
      setFormData({ name: '', email: '', message: '', honeypot: '' });
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>{t('seo_contact_title')}</title>
        <meta name="description" content={t('seo_contact_desc')} />
      </Helmet>
      <main id="main" tabIndex={-1} className="py-20 min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 gradient-text">{t('contact')}</h1>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <label className="block">
              <span className="sr-only">{t('name')}</span>
              <input id="name" type="text" placeholder={t('name')} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border border-gray-300 rounded p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" required />
            </label>
            <label className="block">
              <span className="sr-only">{t('email')}</span>
              <input id="email" type="email" placeholder={t('email')} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border border-gray-300 rounded p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" required />
            </label>
            <label className="block">
              <span className="sr-only">{t('message')}</span>
              <textarea id="message" placeholder={t('message')} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full border border-gray-300 rounded p-2 h-32 dark:border-gray-600 dark:bg-gray-700 dark:text-white" required />
            </label>
            <input type="text" name="honeypot" value={formData.honeypot} onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })} className="hidden" />
            <button type="submit" className="w-full btn-primary">{t('send')}</button>
            <p aria-live="polite" className="text-center">{status}</p>
          </form>
        </div>
      </main>
    </>
  );
}