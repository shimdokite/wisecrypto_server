import Navigation from 'components/Navigation';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full pb-[84px]">
      {children}

      <Navigation />
    </main>
  );
}
