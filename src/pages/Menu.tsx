import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Menu: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>תפריט - המטבח הסיני של לולו</title>
        <meta name="description" content="תפריט המטבח הסיני של לולו - מנות סיניות אותנטיות, נודלס, אטריות אורז ועוד" />
      </Helmet>
      
      <main className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-chinese-red text-center mb-8">
            {t('menu')}
          </h1>
          
          <div className="text-center py-12">
            <p className="text-gray-600">
              התפריט נטען דינמית מקובץ CSV. נא להשלים את הפיתוח.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Menu;