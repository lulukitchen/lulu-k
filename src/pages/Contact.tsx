import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>צור קשר - המטבח הסיני של לולו</title>
        <meta name="description" content="צור קשר עם המטבח הסיני של לולו - טלפון, כתובת ופרטי התקשרות" />
      </Helmet>
      
      <main className="min-h-screen py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-chinese-red text-center mb-8">
            {t('contact')}
          </h1>
          
          <div className="text-center py-12">
            <p className="text-gray-600">
              טופס יצירת קשר יוטמע כאן עם קישור לGoogle Apps Script.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;