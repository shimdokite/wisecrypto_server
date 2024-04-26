import NavigationContainer from './_components/NavigationContainer';

export default function HomeLayout({
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
