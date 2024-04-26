import Image from 'next/image';

export default function Watchlist() {
  const PLATFORM = [
    {
      image: '/assets/image/bitcoin.svg',
      title: 'BTC',
      name: 'Bitcoin',
      percent: '15.3%',
      marketCap: '54,382.64',
    },
    {
      image: '/assets/image/etherium.svg',
      title: 'ETH',
      name: 'Etherium',
      percent: '-2.1%',
      marketCap: '4,145.61',
    },
    {
      image: '/assets/image/litecoin.svg',
      title: 'LTC',
      name: 'Litecoin',
      percent: '-1.1%',
      marketCap: '207.3',
    },
    {
      image: '/assets/image/solana.svg',
      title: 'SOL',
      name: 'Solana',
      percent: '15.3%',
      marketCap: '207.3',
    },
    {
      image: '/assets/image/ripple.svg',
      title: 'XRP',
      name: 'Ripple',
      percent: '15.3%',
      marketCap: '1.0358',
    },
  ];

  return PLATFORM.map((platform) => (
    <article className="flex justify-between items-center bg-White-1 w-[343px] h-[88px] rounded-[10px] px-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-[10px] bg-Light-1 flex justify-center items-center">
          <Image
            src={platform.image}
            alt="brand image"
            width={40}
            height={40}
          />
        </div>

        <div className="flex flex-col">
          <p className="text-Black-1 text-xl font-semibold">
            {platform.title}/BUSD
          </p>

          <p className="text-Gray-1 font-light">{platform.name}</p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1">
        <p className="text-Black-1 font-semibold">${platform.marketCap}</p>

        <div
          className={`${
            platform.percent[0] === '-' ? 'bg-Danger-1' : 'bg-Success-1'
          } rounded-lg flex justify-center items-center px-1 py-1 gap-[2px] opacity-80`}>
          <Image
            src={
              platform.percent[0] === '-'
                ? '/assets/icon/down.svg'
                : '/assets/icon/up.svg'
            }
            alt="arrow image"
            width={14}
            height={14}
          />

          <p className="text-White-1 font-semibold text-[10px]">
            {platform.percent}
          </p>
        </div>
      </div>
    </article>
  ));
}
