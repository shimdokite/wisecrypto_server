import Assets from 'components/Assets';
import ProfileFrame from 'components/ProfileFrame';
import Watchlist from 'components/Watchlist';

export default function Home() {
  return (
    <div className="mx-[15px]">
      <div className="">
        <ProfileFrame />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="text-sm">Aset Anda</p>

            <button className="text-xs font-semibold text-Primary-1">
              Lihat Semua
            </button>
          </div>

          <div className="flex gap-4">
            <Assets />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm">Watchlist</p>
          <div className="flex flex-col gap-2">
            <Watchlist />
          </div>
        </div>
      </div>
    </div>
  );
}
