import Image from 'next/image';

export default function ProfileFrame() {
  return (
    <section className="flex items-center mt-[16px] mx-[15px]">
      <div className="w-full flex gap-3 items-center">
        <Image
          src={'/assets/image/남순.jpg'}
          alt="profile image"
          width={40}
          height={40}
          className="rounded-full w-10 h-10"
        />

        <div className="flex flex-col">
          <p className="text-Gray2-1 text-xs">Halo,</p>

          <h1 className="text-Black-1 text-xl font-semibold">User Name</h1>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <Image
          src={'/assets/icon/notification.svg'}
          alt="notification icon"
          width={24}
          height={24}
          className="w-6 h-6 cursor-pointer"
        />
      </div>
    </section>
  );
}
