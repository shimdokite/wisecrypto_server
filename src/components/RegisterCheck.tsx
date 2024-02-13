interface RegisterCheckProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RegisterCheck({ handleChange }: RegisterCheckProps) {
  return (
    <div className="w-full flex gap-2 items-center">
      <input name="check" type="checkbox" id="check" onChange={handleChange} />

      <label htmlFor="check" className="text-xs">
        <p>
          Saya setuju akan&nbsp;
          <span className="text-Primary-1">
            Syarat dan Ketentuan, Kebijakan&nbsp;
          </span>
        </p>

        <p className="text-Primary-1">
          Privasi&nbsp;<span className="text-Black-1">dan&nbsp;</span>Kebijakan
          Konten
        </p>
      </label>
    </div>
  );
}
