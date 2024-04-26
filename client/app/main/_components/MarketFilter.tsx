'use client';

import { useState } from 'react';

import FilterButton from './FilterButton';

export default function MarketFilter() {
  const [selected, setSelected] = useState('Favorit');

  return (
    <section className="w-full flex gap-2 my-4 mx-[15px]">
      {MARKET.map((market) => (
        <>
          <FilterButton
            market={selected}
            clickToMarket={() => setSelected(market.name)}>
            {market.name}
          </FilterButton>
        </>
      ))}
    </section>
  );
}

const MARKET = [
  {
    id: 'default',
    name: 'Favorit',
  },
  {
    id: 'FIAT',
    name: 'FIAT Pasar',
  },
  {
    id: 'ETF',
    name: 'ETF Pasar',
  },
  {
    id: 'BNB',
    name: 'BNB Pasar',
  },
  {
    id: 'BTC',
    name: 'BTC Pasar',
  },
  {
    id: 'ALTS',
    name: 'ALTS Pasar',
  },
];
