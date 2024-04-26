import Image from 'next/image';

export default function TotalPortfolio() {
  return (
    <section className="w-full">
      <div className="w-[345px] h-[112px] flex justify-between items-center bg-[url('/assets/image/portofolio1.png')] bg-no-repeat rounded-[10px]">
        <div className="flex flex-col pl-6 py-[18px]">
          <p className="text-White-1">Total Portofolio </p>

          <p className="text-White-1 text-[32px] font-semibold">$56.98</p>
        </div>

        <div
          className={`bg-White-1 rounded-lg flex justify-center items-center px-2 py-2 gap-[2px] mr-[25px]`}>
          <Image
            src="/assets/icon/up_green.svg"
            alt="arrow image"
            width={16}
            height={16}
          />

          <p className="text-Success-1 font-semibold text-xs">15.3%</p>
        </div>
      </div>
    </section>
  );
}
