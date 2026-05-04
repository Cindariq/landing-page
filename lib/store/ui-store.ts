import { create } from "zustand";

interface UIState {
  scrolled: boolean;
  setScrolled: (scrolled: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  scrolled: false,
  setScrolled: (scrolled) => set({ scrolled }),
}));
