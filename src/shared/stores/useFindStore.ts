import { create } from "zustand";

interface FindState {
  name: string;
  setName: (name: string) => void;
  reset: () => void;
}

const useFindStore = create<FindState>()(set => ({
  name: "",
  setName: name => set({ name }),
  reset: () => set({ name: "" }),
}));

export { useFindStore };
