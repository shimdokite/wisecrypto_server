'use client';

import useNavigationStore from 'store/navigationStore';

import MenuPresentation from './MenuPresentation';

export default function NavigationContainer() {
  const { menu, setMenu } = useNavigationStore();

  return (
    <nav className="fixed left-0 right-0 bottom-0 w-full bg-White-1 flex items-center justify-evenly gap-[52.5px] px-8">
      <MenuPresentation
        menu={menu}
        icon="home"
        title="Home"
        clickToMenu={() => setMenu('home')}
      />

      <MenuPresentation
        menu={menu}
        icon="market"
        title="Market"
        clickToMenu={() => setMenu('market')}
      />

      <MenuPresentation
        menu={menu}
        icon="profile"
        title="Profile"
        clickToMenu={() => setMenu('profile')}
      />
    </nav>
  );
}
