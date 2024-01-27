'use client';

import { Button, Logo, LoginForm, SignBottom, SignTop } from 'components';

import useForm from 'hooks/useForm';

import { signForm } from 'types/data';

export default function Login() {
  const { values, handleChange, handleSubmit } = useForm({
    initialValue: {
      email: '',
      password: '',
    },
    onSubmit: (values: signForm) => {
      if (values.email && values.password) {
        alert(JSON.stringify(values, null, 2));
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

                <SignBottom role="login" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
