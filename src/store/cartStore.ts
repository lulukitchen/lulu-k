import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface MenuItem {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  price: number;
  description?: string;
  image?: string;
  tags?: string[];
  available: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  toggleCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      addItem: (item: MenuItem) => {
        set((state) => {
          const existingItem = state.items.find(cartItem => cartItem.id === item.id);
          
          if (existingItem) {
            return {
              items: state.items.map(cartItem =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              )
            };
          }
          
          return {
            items: [...state.items, { ...item, quantity: 1 }]
          };
        });
      },
      
      removeItem: (itemId: string) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== itemId)
        }));
      },
      
      updateQuantity: (itemId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        
        set((state) => ({
          items: state.items.map(item =>
            item.id === itemId
              ? { ...item, quantity }
              : item
          )
        }));
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
      
      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }));
      }
    }),
    {
      name: 'lulu-kitchen-cart', // unique name for localStorage
      partialize: (state) => ({ items: state.items }), // only persist items
    }
  )
);