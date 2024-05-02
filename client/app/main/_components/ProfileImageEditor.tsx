import Image from 'next/image';

import { USER_INFO } from './ProfileFrame';

export default function ProfileImageEditor() {
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <Image
        src={USER_INFO.profileImage}
        alt="profile image"
        width={80}
        height={80}
        className="rounded-full"
      />

      <Image
        src="assets/icon/image_editor.svg"
        alt="profile image"
        width={28}
        height={28}
        className="relative left-7 bottom-7 rounded-full"
      />

      <h2 className="text-2xl font-semibold -mt-5">{USER_INFO.name}</h2>
    </div>
  );
}
