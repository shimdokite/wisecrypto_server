import Image from 'next/image';

interface ProfileSetting {
  title: string;
  description: string;
  image: string;
}

export default function SettingPresentation({
  title,
  description,
  image,
}: ProfileSetting) {
  return (
    <section className="w-full bg-White-1 px-4 py-3 rounded-[10px]">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <Image src={image} alt={title} width={44} height={44} />

          <div>
            <p className="font-semibold">{title}</p>
            <p className="text-xs font-light text-Gray-1">{description}</p>
          </div>
        </div>

        <Image
          src="/assets/icon/arrow_left.svg"
          alt="left arrow button"
          width={16}
          height={16}
          className="w-4 h-4"
        />
      </div>
    </section>
  );
}
