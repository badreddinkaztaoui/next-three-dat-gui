import create from "zustand";

type BoxType = {
   position: {
      x: number;
      y: number;
      z: number;
   };
   color: string;
};

export type GuiTypes = {
   box: BoxType;
   setBox: (args: BoxType) => void;
};

export const guiItemsStore = create<GuiTypes>((set) => ({
   box: {
      position: {
         x: 0,
         y: 0,
         z: 0,
      },
      color: "#ff0000",
   },

   setBox: (data: BoxType) => set((state: GuiTypes) => ({ box: data })),
}));
