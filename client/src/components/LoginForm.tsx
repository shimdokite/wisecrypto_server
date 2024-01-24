import SignInput from './SignInput';

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-4">
      <SignInput children="Email" placeholder="botpablo@gmail.com" />

      <SignInput children="Kata Sandi" placeholder="Masukkan Kata Sandi" />
    </form>
  );
}
