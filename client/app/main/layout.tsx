'use client';

import useNavigationStore from 'store/navigationStore';

import { NavigationContainer } from './_components';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { settingType } = useNavigationStore();

  const hiddenNavigation =
    settingType === 'Privasi' ||
    settingType === 'Notifikasi' ||
    settingType === 'Pembayaran';

  return (
    <main className="w-full pb-[84px]">
      {children}

      {hiddenNavigation ? null : <NavigationContainer />}
    </main>
  );
}
