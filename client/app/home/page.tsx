import Assets from './_components/Assets';
import Balance from './_components/Balance';
import ProfileFrame from './_components/ProfileFrame';
import TotalPortfolio from './_components/TotalPortfolio';
import Watchlist from './_components/Watchlist';

export default function Home() {
  return (
    <div className="mt-4">
      <div className="flex flex-col gap-4">
        <ProfileFrame />

        <div className="flex flex-col gap-6">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide ml-[15px]">
            <TotalPortfolio />

            <Balance />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 ml-[15px]">
              <div className="flex justify-between">
                <p className="text-sm">Aset Anda</p>

                <button className="text-xs font-semibold text-Primary-1 mr-[15px]">
                  Lihat Semua
                </button>
              </div>

              <div className="flex gap-4 scrollbar-hide overflow-x-auto">
                <Assets />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 mx-[15px]">
            <p className="text-sm">Watchlist</p>

            <div className="flex flex-col gap-2">
              <Watchlist />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
