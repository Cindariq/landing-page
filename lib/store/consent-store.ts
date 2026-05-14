import { create } from "zustand";
import { persist } from "zustand/middleware";

type ConsentStatus = "undecided" | "accepted" | "declined";

interface ConsentStore {
  status: ConsentStatus;
  accept: () => void;
  decline: () => void;
}

export const useConsentStore = create<ConsentStore>()(
  persist(
    (set) => ({
      status: "undecided",
      accept: () => set({ status: "accepted" }),
      decline: () => set({ status: "declined" }),
    }),
    {
      name: "cindariq-cookie-consent",
    },
  ),
);
