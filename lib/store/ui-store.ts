import { create } from "zustand";

interface UIState {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrolled: boolean;
  setScrolled: (scrolled: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  scrolled: false,
  setScrolled: (scrolled) => set({ scrolled }),
}));
