export const formatMoney = (amount: number): string => {
  const currency = import.meta.env.VITE_CURRENCY || '₪';
  return `${amount.toFixed(0)}${currency}`;
};

export const getImageUrl = (imagePath: string): string => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http')) return imagePath;
  
  const baseUrl = import.meta.env.VITE_IMAGES_BASE || 'https://lulu-k.com/images';
  return `${baseUrl}/luluSITE/${imagePath}`;
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export const isValidEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  const re = /^[\d\-\+\(\)\s]+$/;
  return re.test(phone) && phone.replace(/\D/g, '').length >= 9;
};

export const sanitizeInput = (input: string): string => {
  return input.replace(/<[^>]*>/g, '').trim();
};