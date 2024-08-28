import { create } from "zustand";

export const productStore = create((set) => ({
  food: [],
  addProduct: (product) =>
    set((state) => ({ ...state, food: [...state.food, product] })),
  removeProduct: (productId) =>
    set((state) => ({
      ...state,
      food: [...state.food.filter((foo) => foo.id !== productId)],
    })),
}));
