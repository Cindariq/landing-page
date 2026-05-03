import { create } from "zustand";

interface FormStore {
  /** Which fields have been touched (blurred at least once) */
  touched: Record<string, boolean>;
  touch: (field: string) => void;
  /** Client-side Zod blur errors */
  fieldErrors: Record<string, string | undefined>;
  setFieldError: (field: string, message: string) => void;
  clearFieldError: (field: string) => void;
  reset: () => void;
}

export const useFormValidation = create<FormStore>((set) => ({
  touched: {},
  touch: (field) => set((s) => ({ touched: { ...s.touched, [field]: true } })),
  fieldErrors: {},
  setFieldError: (field, message) =>
    set((s) => ({ fieldErrors: { ...s.fieldErrors, [field]: message } })),
  clearFieldError: (field) =>
    set((s) => {
      const next = { ...s.fieldErrors };
      delete next[field];
      return { fieldErrors: next };
    }),
  reset: () => set({ touched: {}, fieldErrors: {} }),
}));
