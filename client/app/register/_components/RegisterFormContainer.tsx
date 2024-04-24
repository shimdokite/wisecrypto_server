'use client';

import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { postNewUserInfomation } from '../_api/user';

import useForm from 'hooks/useForm';

import { Button, Logo, SignBottom, SignTop } from 'components';

import RegisterFormPresentation from './RegisterFormPresentation';
import RegisterCheck from './RegisterCheck';

import { CreateAccount } from '../_types/data';

export default function RegisterFormContainer() {
  const [isShow, setIsShow] = useState(false);

  const router = useRouter();

  const goToLogin = () => {
    router.push('/login');
  };

  const { next, setNext, values, handleInputValueChange, handleSubmit } =
    useForm({
      initialValue: {
        name: '',
        email: '',
        password: '',
        position: '',
        phoneNumber: '',
        check: false,
      },
      onSubmit: async (values: CreateAccount) => {
        //TODO: 실제 회원가입 로직으로 변경하기
        if (next === true && values.check) {
          const name = values.email || '';
          const phoneNumber = values.phoneNumber || '';
          const position = values.position || '';
          const email = values.email || '';
          const password = '1111';

          const userInfo: CreateAccount = {
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
    if (values.name === '' || values.phoneNumber === '') return;

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
              <RegisterFormPresentation
                next={next}
                values={values}
                isShow={isShow}
                handleSubmit={handleSubmit}
                handleInputValueChange={handleInputValueChange}
                setIsShow={setIsShow}
              />

              <div className="flex flex-col gap-6 justify-center items-center">
                {next ? (
                  <>
                    <RegisterCheck
                      values={values}
                      handleInputValueChange={handleInputValueChange}
                    />

                    <Button color="green" onClick={handleSubmit}>
                      DAFTAR
                    </Button>
                  </>
                ) : (
                  <Button color="green" onClick={onNext}>
                    SELANJUTNYA
                  </Button>
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
