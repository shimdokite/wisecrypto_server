import SettingPresentation from './SettingPresentation';

import { PROFILE_SETTING } from '../constants/data';

export default function SettingContainer() {
  return (
    <>
      <div className="pb-6">
        <SettingPresentation
          title={PROFILE_SETTING.transction_list.title}
          description={PROFILE_SETTING.transction_list.description}
          image={PROFILE_SETTING.transction_list.image}
        />
      </div>

      <div>
        <h2 className="pb-3">Pengaturan</h2>

        <div className="flex flex-col gap-2">
          <SettingPresentation
            title={PROFILE_SETTING.private.title}
            description={PROFILE_SETTING.private.description}
            image={PROFILE_SETTING.private.image}
          />

          <SettingPresentation
            title={PROFILE_SETTING.payment.title}
            description={PROFILE_SETTING.payment.description}
            image={PROFILE_SETTING.payment.image}
          />

          <SettingPresentation
            title={PROFILE_SETTING.notifications.title}
            description={PROFILE_SETTING.notifications.description}
            image={PROFILE_SETTING.notifications.image}
          />
        </div>

        <div className="pt-4">
          <SettingPresentation
            title={PROFILE_SETTING.resign.title}
            description={PROFILE_SETTING.resign.description}
            image={PROFILE_SETTING.resign.image}
          />
        </div>
      </div>
    </>
  );
}
