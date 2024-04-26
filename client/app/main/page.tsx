'use client';

import useNavigationStore from 'store/navigationStore';

import { Home, Market, Profile } from './_components';

export default function Main() {
  const { menu } = useNavigationStore();

  const renderMap = (menu: string) => {
    if (menu === 'home') return <Home />;
    if (menu === 'market') return <Market />;
    if (menu === 'profile') return <Profile />;
  };

  return <>{renderMap(menu)}</>;
}
