'use client';

import { useRouter } from 'next/navigation';

import { postUserCredentials } from './_api/user';

import useForm from '../_shared/hooks/useForm';

import { Button, Logo, SignBottom, SignTop } from '../_shared/components';

import LoginForm from './_components/LoginForm';

import { signForm } from 'types/data';

export default function Login() {
  const router = useRouter();

  const goToRegister = () => {
    router.push('/register');
  };

  const { values, handleChange, handleSubmit } = useForm({
    initialValue: {
      email: '',
      password: '',
    },
    onSubmit: async (values: signForm) => {
      if (values.email && values.password) {
        const email = values.email;
        const password = values.password;

        const userInfo = await postUserCredentials({ email, password });
        alert(userInfo);
      }
    },
  });

  return (
    <section className="w-full h-full">
      <div className="mx-[15px]">
        <div className="flex flex-col gap-[72px] pt-12">
          <Logo />

          <div className="flex flex-col gap-12">
            <SignTop role="login" />

            <div className="h-full flex flex-col gap-8">
              <LoginForm values={values} handleChange={handleChange} />

              <div className="flex flex-col justify-center items-center gap-6">
                <button className="text-Warning-1 text-xs font-semiBold">
                  Lupa Kata Sandi?
                </button>

                <Button color="green" onClick={handleSubmit}>
                  MASUK
                </Button>

                <SignBottom role="login" goToPage={goToRegister} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
