interface SignBottomProps {
  role: 'login' | 'register';
}

export default function SignBottom({ role }: SignBottomProps) {
  return (
    <div className="flex text-Primary-1 font-semiBold text-xs">
      <p>{SIGN_BOTTOM_TEXT[role].title}&nbsp;</p>

      <p className="underline cursor-pointer font-semibold">
        {SIGN_BOTTOM_TEXT[role].button}
      </p>
    </div>
  );
}

const SIGN_BOTTOM_TEXT = {
  login: {
    title: 'Belum Punya Akun?',
    button: 'Daftar disini',
  },
  register: {
    title: 'Sudah Punya Akun?',
    button: 'Masuk disini',
  },
};
