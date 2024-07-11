import { create } from "zustand";

interface FormModalStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useFormModal = create<FormModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export default useFormModal;
