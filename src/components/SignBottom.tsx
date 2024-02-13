interface SignBottomProps {
  role: 'login' | 'register';
  goToPage: () => void;
}

export default function SignBottom({ role, goToPage }: SignBottomProps) {
  return (
    <div className="flex text-Primary-1 font-semiBold text-xs">
      <p>{SIGN_BOTTOM_TEXT[role].title}&nbsp;</p>

      <p className="underline cursor-pointer font-semibold" onClick={goToPage}>
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
