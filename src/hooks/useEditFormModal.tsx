import { create } from "zustand";

interface EditFormModalStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  data: any;
  updateData: (data: any) => void;
}

const useEditFormModal = create<EditFormModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  data: {},
  updateData: (data) => set({ data }),
}));

export default useEditFormModal;
