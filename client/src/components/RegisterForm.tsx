import { FormEventHandler } from 'react';

import SignInput from './SignInput';

import { signForm } from 'types/data';

interface RegisterFormProps {
  next: boolean;
  values: signForm;

  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

export default function RegisterForm({
  next,
  values,
  handleChange,
  handleSubmit,
}: RegisterFormProps) {
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {next ? (
        <>
          <SignInput
            children="Email"
            placeholder="botpablo@gmail.com"
            handleChange={handleChange}
            value={values}
            tag="email"
          />

          <SignInput
            children="Sandi"
            placeholder="Masukkan Sandi"
            type="registerPassword"
            handleChange={handleChange}
            value={values}
            tag="password"
          />

          <SignInput
            children="Konfirmasi Kata Sandi"
            placeholder="Konfirmasi Kata Sandi"
            type="registerPassword"
            handleChange={handleChange}
            value={values}
            tag="passwordCheck"
          />
        </>
      ) : (
        <>
          <SignInput
            type="text"
            children="Nama Lengkap"
            placeholder="Nama Lengkap Pengguna"
            handleChange={handleChange}
            value={values}
            tag="name"
          />

          <SignInput
            type="text"
            children="No. Telp"
            placeholder="No. Telp yang dapat dihubungi"
            handleChange={handleChange}
            value={values}
            tag="phone"
          />

          <div className="flex flex-col gap-2" onChange={handleChange}>
            <label className="font-montserrat">Daftar Sebagai</label>

            <select
              name="role"
              className="appearance-none py-3 pl-4 outline-none focus:shadow-inputShadow focus:border-Primary-1 border-[1px] border-AquaSpring-1 bg-White-1 rounded-lg">
              <option value="user">Pengguna</option>
              <option value="admin">Pengelola</option>
            </select>
          </div>
        </>
      )}
    </form>
  );
}
