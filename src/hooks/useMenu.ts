import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { MenuItem } from '../types';

export const useMenu = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMenu = async () => {
      try {
        setLoading(true);
        setError(null);

        // First try CSV source if available
        if (import.meta.env.VITE_SHEETS_CSV_URL) {
          const controller = new AbortController();
          
          try {
            const response = await fetch(import.meta.env.VITE_SHEETS_CSV_URL, { signal: controller.signal });
            const csvText = await response.text();
            
            Papa.parse(csvText, {
              header: true,
              transformHeader: (h: string) => h.trim().toLowerCase(),
              skipEmptyLines: true,
              complete: (results: any) => {
                const menuItems: MenuItem[] = results.data
                  .map((item: any) => ({
                    id: item.id || Math.random().toString(36).substr(2, 9),
                    name: item.name || item['שם'] || '',
                    description: item.description || item['תיאור'] || '',
                    price: Number(item.price || item['מחיר'] || 0),
                    category: item.category || item['קטגוריה'] || 'main',
                    image: item.image || item['תמונה'] || '',
                    tags: (item.tags || item['תגים'] || '').split(',').map((tag: string) => tag.trim()).filter(Boolean),
                    available: item.available !== 'false' && item.available !== 'FALSE',
                  }))
                  .filter((item: MenuItem) => item.price > 0);

                setMenu(menuItems);
                setLoading(false);
              },
            });
            return;
          } catch (csvError) {
            console.warn('CSV failed, trying JSON fallback:', csvError);
          }
        }

        // Fallback to JSON endpoint
        if (import.meta.env.VITE_MENU_JSON_URL) {
          try {
            const res = await fetch(import.meta.env.VITE_MENU_JSON_URL);
            const data = await res.json();
            setMenu(Array.isArray(data) ? data : data.menu || []);
          } catch (jsonError) {
            console.warn('JSON endpoint failed:', jsonError);
            // Set fallback demo menu
            setMenu([
              {
                id: '1',
                name: 'עוף בצ\'ילי מתוק',
                description: 'חתיכות עוף רכות עם ירקות בריקה צ\'ילי מתוקה',
                price: 45,
                category: 'main',
                tags: ['חריף', 'עוף'],
                image: 'chicken-chili.jpg'
              },
              {
                id: '2',
                name: 'אורז מטוגן',
                description: 'אורז מטוגן עם ירקות וביצה',
                price: 30,
                category: 'rice',
                tags: ['טבעוני', 'אורז'],
                image: 'fried-rice.jpg'
              }
            ]);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'שגיאה בטעינת התפריט');
      } finally {
        setLoading(false);
      }
    };

    loadMenu();
  }, []);

  return { menu, loading, error };
};