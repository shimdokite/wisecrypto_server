interface InputProps {
  placeholder: string;
}

export default function Input({ placeholder }: InputProps) {
  return (
    <input
      className="w-full py-3 pl-4 outline-none focus:shadow-inputShadow focus:border-Primary-1 border-[1px] border-White-1 bg-White-1 rounded-lg text-Gray-1"
      placeholder={placeholder}
    />
  );
}
