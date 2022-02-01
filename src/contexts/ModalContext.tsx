import { createContext, useContext } from "react";

export interface ModalContextType {
  openModal: boolean;
  setOpenModal: (m: boolean) => void;
  confirmDelete: string;
  setConfirmDelete: (id: string) => void;
}

export const ModalContext = createContext<ModalContextType>({
  openModal: false,
  setOpenModal: () => {},
  confirmDelete: "",
  setConfirmDelete: () => {},
});

export const useModal = () => useContext(ModalContext);
