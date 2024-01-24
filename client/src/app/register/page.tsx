import Image from 'next/image';

import { Button, Logo, RegisterForm, SignBottom, SignTop } from 'components';

export default function Register() {
  return (
    <section className="w-full h-full">
      <div className="mx-[15px]">
        <div className="flex flex-col gap-[72px] pt-12">
          <Logo />

          <div className="flex flex-col gap-12">
            <SignTop role="register" />

            <div className="flex flex-col gap-6">
              <RegisterForm />

              <div className="flex flex-col gap-6 justify-center items-center">
                <Button children="SELANJUTNYA" color="green" />

                <SignBottom role="register" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-12">
          <button className="flex items-center text-Gray2-1">
            <p className="py-2 pr-[2px] text-[11px] underline">
              Lewati langkah ini
            </p>

            <Image
              src="/assets/icon/right_arrow.svg"
              alt="right arrow"
              width={10.67}
              height={10.37}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
