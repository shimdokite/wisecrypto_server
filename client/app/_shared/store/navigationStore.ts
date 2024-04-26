import { create } from 'zustand';

interface navigationStoreProps {
  menu: string;

  setMenu: (menu: string) => void;
}

const useNavigationStore = create<navigationStoreProps>((set) => ({
  menu: 'home',

  setMenu: (menu) => set(() => ({ menu })),
}));

export default useNavigationStore;
