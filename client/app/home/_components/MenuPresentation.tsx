import Image from 'next/image';

interface MenuProps {
  menu: string;
  icon: string;
  title: string;

  clickToMenu: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function MenuPresentation({
  menu,
  title,
  icon,
  clickToMenu,
}: MenuProps) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-[10px] pb-3 cursor-pointer"
      onClick={clickToMenu}>
      <hr
        className={`${
          menu === icon && 'w-[66px] border-[1px] border-Primary-1 rounded-full'
        }`}></hr>

      <Image
        src={
          menu === icon
            ? `/assets/icon/green_${icon}.svg`
            : `/assets/icon/${icon}.svg`
        }
        alt={`${icon} icon`}
        width={19}
        height={20}
        className="w-[19px] h-5"
      />

      <p
        className={`${
          menu === icon ? 'text-Primary-1' : 'text-Gray2-1'
        } text-xs text-center`}>
        {title}
      </p>
    </div>
  );
}
