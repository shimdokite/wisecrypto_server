import { ProfileImageEditor, CurrentMyBalance, SettingContainer } from '.';

export default function Profile() {
  return (
    <div className="mx-[15px]">
      <ProfileImageEditor />

      <CurrentMyBalance />

      <SettingContainer />
    </div>
  );
}
