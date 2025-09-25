import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { MenuItem } from '../store/cartStore';

interface MenuData {
  items: MenuItem[];
  categories: string[];
  loading: boolean;
  error: string | null;
}

interface CSVRow {
  id?: string;
  name?: string;
  nameEn?: string;
  category?: string;
  price?: string;
  description?: string;
  image?: string;
  tags?: string;
  available?: string;
}

export const useMenu = (): MenuData => {
  const [menuData, setMenuData] = useState<MenuData>({
    items: [],
    categories: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setMenuData(prev => ({ ...prev, loading: true, error: null }));
        
        const csvUrl = import.meta.env.VITE_SHEETS_CSV_URL;
        if (!csvUrl) {
          throw new Error('CSV URL not configured');
        }

        // Add timestamp to prevent caching
        const urlWithTimestamp = `${csvUrl}&t=${Date.now()}`;
        
        const response = await fetch(urlWithTimestamp);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const csvText = await response.text();
        
        Papa.parse<CSVRow>(csvText, {
          header: true,
          skipEmptyLines: true,
          transformHeader: (header: string) => header.trim().toLowerCase(),
          transform: (value: string) => value.trim(),
          complete: (results) => {
            if (results.errors.length > 0) {
              console.warn('CSV parsing warnings:', results.errors);
            }

            const items: MenuItem[] = results.data
              .filter((row: CSVRow) => row.name && row.price) // Filter out invalid rows
              .map((row: CSVRow, index: number) => ({
                id: row.id || `item-${index}`,
                name: row.name || '',
                nameEn: row.nameEn || row.name || '',
                category: row.category || 'לא מסווג',
                price: parseFloat(row.price || '0'),
                description: row.description || '',
                image: row.image || '',
                tags: row.tags ? row.tags.split(',').map(tag => tag.trim()) : [],
                available: row.available !== 'false' && row.available !== '0'
              }))
              .filter(item => item.available); // Only show available items

            const categories = [...new Set(items.map(item => item.category))];

            setMenuData({
              items,
              categories,
              loading: false,
              error: null
            });
          },
          error: (error: Error) => {
            console.error('CSV parsing error:', error);
            setMenuData(prev => ({
              ...prev,
              loading: false,
              error: `שגיאה בטעינת התפריט: ${error.message}`
            }));
          }
        });
      } catch (error) {
        console.error('Menu fetch error:', error);
        setMenuData(prev => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'שגיאה בטעינת התפריט'
        }));
      }
    };

    fetchMenu();
  }, []);

  return menuData;
};