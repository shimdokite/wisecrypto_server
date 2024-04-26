import { NavigationContainer } from './_components';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full pb-[84px]">
      {children}

      <NavigationContainer />
    </main>
  );
}
