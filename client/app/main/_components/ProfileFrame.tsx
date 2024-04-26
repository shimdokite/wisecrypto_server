import Image from 'next/image';

export default function ProfileFrame() {
  const USER_INFO = {
    name: 'Shimdokite',
    profileImage: '/assets/image/남순.jpg',
  };

  return (
    <section className="flex items-center mx-[15px]">
      <div className="w-full flex gap-3 items-center">
        <Image
          src={USER_INFO.profileImage || USER_DEFAULT_PROFILE_IMAGE}
          alt="profile image"
          width={40}
          height={40}
          className="rounded-full w-10 h-10"
        />

        <div className="flex flex-col">
          <p className="text-Gray2-1 text-xs">Halo,</p>

          <h1 className="text-Black-1 text-xl font-semibold">
            {USER_INFO.name}
          </h1>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <Image
          src={'/assets/icon/notification.svg'}
          alt="notification icon"
          width={24}
          height={24}
          className="w-6 h-6 cursor-pointer"
        />
      </div>
    </section>
  );
}

const USER_DEFAULT_PROFILE_IMAGE = '/assets/image/default_profile_image.svg';
