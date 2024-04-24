'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import {
  Button,
  Logo,
  RegisterCheck,
  RegisterForm,
  SignBottom,
  SignTop,
} from 'components';

import useForm from 'hooks/useForm';

import { signForm } from 'types/data';

import { postNewUserInfomation } from 'api/user';

export default function Register() {
  const router = useRouter();

  const goToLogin = () => {
    router.push('/login');
  };

  const { next, setNext, values, handleChange, handleSubmit } = useForm({
    initialValue: {
      name: '',
      email: '',
      password: '',
      phone: '',
      position: '',
      passwordCheck: '',
      check: false,
    },
    onSubmit: async (values: signForm) => {
      if (next === true && values.check) {
        const name = values.email || '';
        const phoneNumber = values.phone || '';
        const position = values.position || '';
        const email = values.email || '';
        const password = '1111';

        const userInfo = {
          name,
          phoneNumber,
          position,
          email,
          password,
        };

        const test = await postNewUserInfomation(userInfo);
        console.log(test);
        // alert(JSON.stringify(values, null, 2));
      }
    },
  });

  const onNext = () => {
    if (values.name === '' || values.phone === '') return;

    setNext(true);
  };

  return (
    <section className="w-full h-full">
      <div className="mx-[15px]">
        <div className="flex flex-col gap-[72px] pt-12">
          <Logo />

          <div className="flex flex-col gap-12">
            <SignTop role="register" />

            <div className="flex flex-col gap-6">
              <RegisterForm
                next={next}
                values={values}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
              />

              <div className="flex flex-col gap-6 justify-center items-center">
                {next ? (
                  <>
                    <RegisterCheck
                      values={values}
                      handleChange={handleChange}
                    />

                    <Button
                      children="DAFTAR"
                      color="green"
                      onClick={handleSubmit}
                    />
                  </>
                ) : (
                  <Button
                    children="SELANJUTNYA"
                    color="green"
                    onClick={onNext}
                  />
                )}

                <SignBottom role="register" goToPage={goToLogin} />
              </div>
            </div>
          </div>
        </div>

        {!next && (
          <div className="flex justify-end pt-12">
            <button
              className="flex items-center text-Gray2-1"
              onClick={() => setNext(!next)}>
              <p className="py-2 pr-1 text-[11px] underline">
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
        )}
      </div>
    </section>
  );
}
