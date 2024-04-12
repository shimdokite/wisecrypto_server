import { PasswordInput } from '.';

import { signForm } from 'types/data';

interface RegisterInputProps {
  children: string;
  placeholder: string;
  value: signForm;
  tag: 'email' | 'name' | 'phone' | 'password' | 'passwordCheck' | 'role';
  type?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SignInput({
  children,
  placeholder,
  value,
  tag,
  type,
  handleChange,
}: RegisterInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-montserrat">{children}</label>

      {type === 'registerPassword' ? (
        <PasswordInput placeholder={placeholder} />
      ) : (
        <input
          type={type}
          name={tag}
          className="w-full py-3 pl-4 outline-none focus:shadow-inputShadow focus:border-Primary-1 border-[1px] border-AquaSpring-1 bg-White-1 rounded-lg text-Gray-1"
          placeholder={placeholder}
          onChange={handleChange}
          value={value[tag]}
        />
      )}
    </div>
  );
}
