import { Button, SignBottom } from 'components';

import { LoginInfo } from '../_types/data';

interface LoginFormPresentationProps {
  values: LoginInfo;

  handleInputValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  goToRegister: () => void;
}

export default function LoginFormPresentation({
  values,
  handleInputValueChange,
  handleSubmit,
  goToRegister,
}: LoginFormPresentationProps) {
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label className="font-montserrat">Email</label>
        <input
          type="email"
          name="email"
          placeholder="botpablo@gmail.com"
          value={values.email}
          onChange={handleInputValueChange}
          className="w-full py-3 pl-4 outline-none focus:shadow-inputShadow focus:border-Primary-1 border-[1px] border-AquaSpring-1 bg-White-1 rounded-lg text-Gray-1"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-montserrat">Kata Sandi</label>
        <input
          type="password"
          name="password"
          placeholder="Masukkan Kata Sandi"
          value={values.password}
          onChange={handleInputValueChange}
          className="w-full py-3 pl-4 outline-none focus:shadow-inputShadow focus:border-Primary-1 border-[1px] border-AquaSpring-1 bg-White-1 rounded-lg text-Gray-1"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-6">
        <button className="text-Warning-1 text-xs font-semiBold">
          Lupa Kata Sandi?
        </button>

        <Button color="green" type="submit">
          MASUK
        </Button>

        <SignBottom role="login" goToPage={goToRegister} />
      </div>
    </form>
  );
}
