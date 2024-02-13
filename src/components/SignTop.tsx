interface SignTopProps {
  role: 'login' | 'register';
}

export default function SignTop({ role }: SignTopProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[32px] font-semibold">{SIGN_UP_TITLE[role]}</h1>

      <p className="text-[14px] font-semiBold text-Primary-1">
        Trusted by millions of users worldwide
      </p>
    </div>
  );
}

const SIGN_UP_TITLE = {
  login: 'Selamat Datang',
  register: 'Daftar Sekarang',
} as const;
