import { Button, Logo, LoginForm, SignBottom, SignTop } from 'components';

export default function Login() {
  return (
    <section className="w-full h-full">
      <div className="mx-[15px]">
        <div className="flex flex-col gap-[72px] pt-12">
          <Logo />

          <div className="flex flex-col gap-12">
            <SignTop role="login" />

            <div className="h-full flex flex-col gap-8">
              <LoginForm />

              <div className="flex flex-col justify-center items-center gap-6">
                <button className="text-Warning-1 text-xs font-semiBold">
                  Lupa Kata Sandi?
                </button>

                <Button color="green">MASUK</Button>

                <SignBottom role="login" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
