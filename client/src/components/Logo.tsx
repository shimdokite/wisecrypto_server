import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/assets/image/main_logo.svg"
        alt="main logo"
        width={180}
        height={64}
      />
    </div>
  );
}
