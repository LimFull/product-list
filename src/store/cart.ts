import { create } from 'zustand'
import { Product } from '@/types/products'

interface CartStore {
  cart: Product[];
  addCart: (product: Product) => void;
  removeCart: (product: Product) => void;
  initCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addCart: (product: Product) => set((state) => {
    const updated = [...state.cart, product];
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(updated));
    }
    return { cart: updated };
  }),
  removeCart: (product: Product) => set((state) => {
    const updated = state.cart.filter((p) => p.id !== product.id);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(updated));
    }
    return { cart: updated };
  }),
  initCart: () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cart');
      set({ cart: stored ? JSON.parse(stored) : [] });
    }
  },
}))