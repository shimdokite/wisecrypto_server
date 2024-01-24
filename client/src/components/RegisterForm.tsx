import SignInput from './SignInput';

export default function RegisterForm() {
  return (
    <form className="flex flex-col gap-4">
      <SignInput children="Nama Lengkap" placeholder="Nama Lengkap Pengguna" />

      <SignInput
        children="No. Telp"
        placeholder="No. Telp yang dapat dihubungi"
      />

      <div className="flex flex-col gap-2">
        <label className="font-montserrat">Daftar Sebagai</label>

        <select className="appearance-none py-3 pl-4 outline-none focus:shadow-inputShadow focus:border-Primary-1 border-[1px] border-AquaSpring-1 bg-White-1 rounded-lg">
          <option>Pengguna</option>
          <option>Pengelola</option>
        </select>
      </div>
    </form>
  );
}
