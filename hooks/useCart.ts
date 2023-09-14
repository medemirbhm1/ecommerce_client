import { create } from "zustand";
import { OrderItem, Product } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";

interface CartStore {
  items: OrderItem[];
  addItem: (data: Product, source?: string) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  increaseQunatity: (id: string) => void;
  decreaseQunatity: (id: string) => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product, source?: string) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);
        if (existingItem) {
          if (source !== "BUY_NOW") {
            return toast("Le produit existe déjà dans le panier");
          }
          return;
        }
        set({ items: [...currentItems, { ...data, quantity: 1 }] });
        toast.success("Produit ajouté au panier");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Produit supprimé du panier");
      },
      removeAll: () => {
        set({ items: [] });
      },
      increaseQunatity: (id: string) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === id);
        if (existingItem) {
          existingItem.quantity += 1;
          set({ items: [...currentItems] });
        }
      },
      decreaseQunatity: (id: string) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === id);
        if (existingItem) {
          existingItem.quantity -= 1;
          set({ items: [...currentItems] });
        }
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
