import Image from 'next/image';

import Button from 'components/Button';
import LoginForm from 'components/LoginForm';

export default function Login() {
  return (
    <section className="w-full h-full">
      <div className="mx-[15px]">
        <div className="flex flex-col gap-[72px] pt-12">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/image/main_logo.svg"
              alt="main logo"
              width={180}
              height={64}
            />
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[32px] font-bold">Selamat Datang</h1>
              <p className="text-[14px] font-semiBold text-Primary-1">
                Trusted by millions of users worldwide
              </p>
            </div>

            <div className="h-full flex flex-col gap-8">
              <LoginForm />

              <div className="flex flex-col justify-center items-center gap-6">
                <button className="text-Warning-1 text-xs font-semiBold">
                  Lupa Kata Sandi?
                </button>

                <Button color="green">MASUK</Button>

                <div className="flex text-Primary-1 font-semiBold text-xs">
                  <p>Belum Punya Akun?&nbsp;</p>
                  <p className="underline cursor-pointer">Daftar disini</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
