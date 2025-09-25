// Menu item from CSV data
export interface MenuItem {
  id: string
  name: string
  nameHe: string
  description?: string
  descriptionHe?: string
  price: number
  category: string
  categoryHe: string
  image?: string
  tags?: string[]
  available: boolean
  spicy?: boolean
  vegetarian?: boolean
  vegan?: boolean
}

// Cart item with quantity
export interface CartItem extends MenuItem {
  quantity: number
}

// Order details
export interface Order {
  items: CartItem[]
  customerInfo: CustomerInfo
  totalPrice: number
  deliveryFee: number
  orderTime: Date
  notes?: string
}

// Customer information
export interface CustomerInfo {
  name: string
  phone: string
  email?: string
  address: string
  city: string
  deliveryInstructions?: string
}

// Contact form data
export interface ContactForm {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

// Review/feedback data
export interface Review {
  name: string
  email?: string
  rating: number
  comment: string
  date: Date
  approved?: boolean
}