'use client';

import { useState } from 'react';

import Menu from './Menu';

export default function Navigation() {
  const [menu, setMenu] = useState('');

  return (
    <nav className="fixed left-0 right-0 bottom-0 w-full bg-White-1 flex items-center justify-evenly gap-[52.5px] px-8">
      <Menu
        menu={menu}
        icon="home"
        title="Home"
        clickToMenu={() => setMenu('home')}
      />

      <Menu
        menu={menu}
        icon="market"
        title="Market"
        clickToMenu={() => setMenu('market')}
      />

      <Menu
        menu={menu}
        icon="profile"
        title="Profile"
        clickToMenu={() => setMenu('profile')}
      />
    </nav>
  );
}
