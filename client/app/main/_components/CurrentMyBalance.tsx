import MoneyTransactionButton from './MoneyTransactionButton';

export default function CurrentMyBalance() {
  return (
    <>
      <section className="pt-6">
        <div className="w-[354px] h-[100px] bg-[url('/assets/image/current_balance.svg')] bg-no-repeat px-[18px] pt-4">
          <div className="flex justify-between">
            <div className="flex flex-col text-White-1">
              <p>Saldo Saat Ini</p>
              <p className="font-bold">= Rp.360.242.500</p>
            </div>

            <h1 className="text-White-1 text-[32px] font-semibold pr-[18px]">
              $25,000
            </h1>
          </div>
        </div>
      </section>

      <div className="relative bottom-[26px]">
        <MoneyTransactionButton />
      </div>
    </>
  );
}
