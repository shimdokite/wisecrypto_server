export default function CheckMyBalance() {
  const USER_BALANCE = {
    userBalance: '$10',
  };

  return (
    <section className="w-full">
      <div className="w-[345px] h-[112px] flex justify-between items-center bg-[url('/assets/image/balance.png')] bg-no-repeat pl-6 pr-[25px] rounded-[10px]">
        <div className="flex flex-col items-center">
          <p className="text-Gray-1">Saldo Kamu</p>

          <p className="text-Gray-1 font-semibold text-[32px]">{USER_BALANCE.userBalance}</p>
        </div>

        <div className="bg-Primary-1 rounded-lg flex justify-center items-center px-2 py-2">
          <button className="text-White-1 font-semibold text-xs">Tambah</button>
        </div>
      </div>
    </section>
  );
}
