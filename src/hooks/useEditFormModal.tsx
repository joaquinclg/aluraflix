import { create } from "zustand";

interface EditFormModalStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useEditFormModal = create<EditFormModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export default useEditFormModal;
