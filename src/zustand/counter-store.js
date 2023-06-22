import { create } from 'zustand';

export const useCounterStore = create((set) => ({
  value: 0,
  increase: () => set((state) => ({ value: state.value + 1 })),
  decrease: () => set((state) => ({ value: state.value - 1 })),
  reset: () => set(() => ({ value: 0 })),
}));
