import { create } from "zustand";

export const useHrStore = create((set) => ({
  dark: true,
  setDark: () => set((state) => ({ dark: !state.dark })),
}));
