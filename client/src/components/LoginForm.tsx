import SignInput from './SignInput';

import { signForm } from 'types/data';

interface LoginFormProps {
  values: signForm;

  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LoginForm({ values, handleChange }: LoginFormProps) {
  return (
    <form className="flex flex-col gap-4">
      <SignInput
        children="Email"
        placeholder="botpablo@gmail.com"
        handleChange={handleChange}
        value={values}
        tag="email"
      />

      <SignInput
        children="Kata Sandi"
        placeholder="Masukkan Kata Sandi"
        handleChange={handleChange}
        value={values}
        tag="password"
      />
    </form>
  );
}
