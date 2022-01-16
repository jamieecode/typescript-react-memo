import { createContext, useContext } from "react";

export type ColorContextType = {
  selectedColor: string;
  setSelectedColor: (c: string) => void;
};

export const ColorContext = createContext<ColorContextType>({
  selectedColor: "",
  setSelectedColor: () => {},
});

export const useColor = () => useContext(ColorContext);
