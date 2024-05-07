import { create } from 'zustand';

interface navigationStoreProps {
  menu: string;
  settingType: string;

  setMenu: (menu: string) => void;
  setSettingType: (settingType: string) => void;
}

const useNavigationStore = create<navigationStoreProps>((set) => ({
  menu: 'home',
  settingType: '',

  setMenu: (menu) => set(() => ({ menu })),
  setSettingType: (settingType) => set(() => ({ settingType })),
}));

export default useNavigationStore;
