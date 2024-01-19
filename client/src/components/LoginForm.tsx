import Input from './Input';

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="font-montserrat font-medium">Email</label>
        <Input placeholder="botpablo@gmail.com" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-montserrat font-medium">Kata Sandi</label>
        <Input placeholder="Masukkan Kata Sandi" />
      </div>
    </form>
  );
}
