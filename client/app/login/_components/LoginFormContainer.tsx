'use client';

import { useRouter } from 'next/navigation';

import { postUserCredentials } from '../_api/user';

import useForm from 'hooks/useForm';

import { Logo, SignTop } from 'components';

import LoginFormPresentation from './LoginFormPresentation';

import { LoginInfo } from '../_types/data';

export default function LoginFormContainer() {
  const router = useRouter();

  const goToRegister = () => {
    router.push('/register');
  };

  const { values, handleInputValueChange, handleSubmit } = useForm({
    initialValue: {
      email: '',
      password: '',
    },
    onSubmit: async (values: LoginInfo) => {
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
              <LoginFormPresentation
                values={values}
                handleInputValueChange={handleInputValueChange}
                handleSubmit={handleSubmit}
                goToRegister={goToRegister}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
