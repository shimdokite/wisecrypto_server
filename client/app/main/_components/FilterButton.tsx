interface FilterButtonProps {
  children: string;
  market: string;

  clickToMarket: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function FilterButton({
  children,
  market,
  clickToMarket,
}: FilterButtonProps) {
  return (
    <button
      onClick={clickToMarket}
      className={`${
        market === children
          ? 'text-White-1 bg-Primary-1'
          : 'text-Primary-1 border-Primary-1 border-[1px]'
      } font-semibold text-xs whitespace-nowrap px-3 py-2 rounded-lg`}>
      {children}
    </button>
  );
}
