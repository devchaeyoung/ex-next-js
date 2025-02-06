import { Product } from "@/type/product";
import { createStore } from "zustand";

export type CartProduct = Product & { quantity: number };

export interface CartProps {
  products: CartProduct[];
}

export interface CartState extends CartProps {
  addProduct: (product: CartProduct) => void;
  removeProduct: (id:number) => void
}

export type CartStore = ReturnType<typeof createCartStore>;

export const createCartStore = (initProps?: Partial<CartProps>) => {
  const DEFAULT_PROPS: CartProps = {
    products: [],
  };
 
  return createStore<CartState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    addProduct: (product: CartProduct) =>
      set((state) => ({
        products: [...state.products, product],
      })),

    removeProduct: (id: number) => {
      set(state => ({
        products: state.products.filter((p)=> p.id !== id),
      }))
    },
  }));
};