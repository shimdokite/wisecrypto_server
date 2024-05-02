'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { postNewUserInfomation } from '../_api/user';

import useForm from 'hooks/useForm';

import { Logo, SignTop } from 'components';
import RegisterFormPresentation from './RegisterFormPresentation';

import { CreateAccount } from '../_types/data';

export default function RegisterFormContainer() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isPasswordCheckShow, setIsPasswordCheckShow] = useState(false);

  const router = useRouter();

  const { next, values, handleInputValueChange, setSubmitting, setNext } =
    useForm({
      initialValue: {
        name: '',
        email: '',
        password: '',
        position: 'Pengguna',
        phoneNumber: '',
        check: false,
      },
      onSubmit: async (values: CreateAccount) => {
        const name = values.email || '';
        const phoneNumber = values.phoneNumber || '';
        const position = values.position || '';
        const email = values.email || '';
        const password = values.password || '';

        const userInfo: CreateAccount = {
          name,
          phoneNumber,
          position,
          email,
          password,
        };

        const test = await postNewUserInfomation(userInfo);
        console.log(test);
      },
    });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const {
      name,
      phoneNumber,
      position,
      email,
      password,
      passwordCheck,
      check,
    } = values;

    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (name && phoneNumber && position && email && password && check && next)
      setSubmitting(true);
  };

  const onNext = () => {
    if (values.name === '' || values.phoneNumber === '') return;

    setNext(true);
  };

  const goToLogin = () => {
    router.push('/login');
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
                isPasswordShow={isPasswordShow}
                isPasswordCheckShow={isPasswordCheckShow}
                handleSubmit={handleSubmit}
                handleInputValueChange={handleInputValueChange}
                setIsPasswordShow={setIsPasswordShow}
                setIsPasswordCheckShow={setIsPasswordCheckShow}
                onNext={onNext}
                goToLogin={goToLogin}
              />
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
