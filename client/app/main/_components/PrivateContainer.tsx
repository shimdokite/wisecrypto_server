'use client';

import { FormEvent } from 'react';

import useNavigationStore from 'store/navigationStore';

import useForm from 'hooks/useForm';

import { SaveChangeButton, PrivatePresentation } from '.';

import { ChangeEmailAndPassword } from '../types/data';

export default function PrivateContainer() {
  const { setSettingType } = useNavigationStore();

  const { values, handleInputValueChange, setSubmitting } = useForm({
    initialValue: {
      email: '',
      previousPassword: '',
      changedPassword: '',
    },
    onSubmit: async (values: ChangeEmailAndPassword) => {
      const { email, previousPassword, changedPassword } = values;

      // const userInfo = await postUserCredentials({ email, password });
      // console.log(userInfo.data);
    },
  });

  //TODO: handleSubmit hook으로 빼기
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const { email, previousPassword, changedPassword } = values;

    if (email && previousPassword && changedPassword) setSubmitting(true);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <PrivatePresentation
        values={values}
        handleInputValueChange={handleInputValueChange}
        setSettingType={setSettingType}
      />

      <SaveChangeButton>Simpan</SaveChangeButton>
    </form>
  );
}
