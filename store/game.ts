import { create } from "zustand";

interface GameStore {
  points: number;
  pickedItem: string;
  isPicked: boolean;
  addPoints: (points: number) => void;
  setPickedItem: (item: string) => void;
  setIsPicked: (isPicked: boolean) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  points: 0,
  pickedItem: '',
  isPicked: false,
  addPoints: (points) => set((state) => ({ points: state.points + points })),
  setPickedItem: (item) => set({ pickedItem: item }),
  setIsPicked: (isPicked) => set({ isPicked }),
}));
