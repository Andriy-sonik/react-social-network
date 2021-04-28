import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/userDefault.jpg";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  let onMainPhotoSelected=(e)=>{
    if(e.target){
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto}  className={s.mainPhoto}/>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
      </div>
    </div>
  );
};
export default ProfileInfo;
