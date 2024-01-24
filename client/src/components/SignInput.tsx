import Input from './Input';

interface RegisterInputProps {
  children: string;
  placeholder: string;
}

export default function SignInput({
  children,
  placeholder,
}: RegisterInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-montserrat">{children}</label>

      <Input placeholder={placeholder} />
    </div>
  );
}
