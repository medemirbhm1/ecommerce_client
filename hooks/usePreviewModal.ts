import { create } from "zustand";
import { Product } from "@/types";
import { data } from "autoprefixer";

interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onclose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ data: data, isOpen: true }),
  onclose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
