import Image from 'next/image';

export default function TotalPortfolio() {
  const USER_PORTFOLIO = {
    totalPortfolio: '$56.98',
    percent: '15.3%',
  };

  return (
    <section className="w-full">
      <div className="w-[345px] h-[112px] flex justify-between items-center bg-[url('/assets/image/portofolio1.png')] bg-no-repeat rounded-[10px]">
        <div className="flex flex-col pl-6 py-[18px]">
          <p className="text-White-1">Total Portofolio</p>

          <p className="text-White-1 text-[32px] font-semibold">
            {USER_PORTFOLIO.totalPortfolio}
          </p>
        </div>

        <div
          className={`${
            USER_PORTFOLIO.percent[0] === '-' ? 'bg-Danger-1' : 'bg-White-1'
          } rounded-lg flex justify-center items-center px-2 py-2 gap-[2px] mr-[25px]`}>
          <Image
            src={
              USER_PORTFOLIO.percent[0] === '-'
                ? '/assets/icon/down.svg'
                : '/assets/icon/up_green.svg'
            }
            alt="arrow image"
            width={14}
            height={14}
          />

          <p
            className={`${
              USER_PORTFOLIO.percent[0] === '-'
                ? 'text-White-1'
                : 'text-Success-1'
            }  font-semibold text-xs`}>
            {USER_PORTFOLIO.percent}
          </p>
        </div>
      </div>
    </section>
  );
}
