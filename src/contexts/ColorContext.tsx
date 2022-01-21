import { createContext, useContext } from "react";

export interface ColorContextType {
  selectedColor: string;
  setSelectedColor: (c: string) => void;
}

export const ColorContext = createContext<ColorContextType>({
  selectedColor: "",
  setSelectedColor: () => {},
});

export const useColor = () => useContext(ColorContext);
