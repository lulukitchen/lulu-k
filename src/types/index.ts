export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  image?: string;
  tags: string[];
  available?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Contact {
  name: string;
  email: string;
  phone?: string;
  message: string;
  honeypot?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  contact: Contact;
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered';
  createdAt: string;
}

export interface EnvVars {
  VITE_SHEETS_CSV_URL: string;
  VITE_MENU_JSON_URL: string;
  VITE_IMAGES_BASE: string;
  VITE_FORM_ENDPOINT: string;
  VITE_ORDER_ENDPOINT: string;
  VITE_REVIEW_ENDPOINT: string;
  VITE_CURRENCY: string;
  VITE_DELIVERY_FEE: string;
}