import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile,status, updateStatus}) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.profileImg}>
        <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQYSibIOdUg1VOegwxLDq35TNE8I_FOo-qwyDbeXwS96iUnuWfcyR2ZquLrN2dPqJn1Gza29BUCpYUHGB7wMDQ" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
