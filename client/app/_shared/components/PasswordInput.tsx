'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PasswordInputProps {
  placeholder: string;
}

export default function PasswordInput({ placeholder }: PasswordInputProps) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="relative">
      <input
        type={isShow ? 'text' : 'password'}
        className={`w-full py-3 pl-4 bg-no-repeat bg-[center_right_17px] outline-none focus:shadow-inputShadow focus:border-Primary-1 border-[1px] border-AquaSpring-1 bg-White-1 rounded-lg text-Gray-1`}
        placeholder={placeholder}
      />

      <Image
        src={isShow ? SIGN_INPUT.show : SIGN_INPUT.hide}
        alt="password show & hide"
        width={16}
        height={16}
        className="absolute top-0 bottom-0 right-0 mr-[17px] h-full"
        onClick={() => setIsShow(!isShow)}
      />
    </div>
  );
}

const SIGN_INPUT = {
  show: '/assets/icon/show.svg',
  hide: '/assets/icon/hide.svg',
} as const;
