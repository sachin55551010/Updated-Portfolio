import { create } from "zustand";

interface StateData {
  activeNav: string;
  setActiveNav: (val: string) => void;
}
export const useStateStore = create<StateData>((set) => ({
  activeNav: "Home",
  setActiveNav: (val) => {
    set({ activeNav: val });
  },
}));
