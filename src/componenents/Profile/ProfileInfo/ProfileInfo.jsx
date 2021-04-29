import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/userDefault.jpg";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <Preloader/>;
    }
    let onMainPhotoSelected = (e) => {
        if (e.target) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(()=>{setEditMode(false)})
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} alt={'main photo'}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                {editMode ?
                    <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/> :
                    <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}
            </div>
        </div>
    );
};
const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (<div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div><strong>About me: </strong><i>{profile.aboutMe}</i></div>
        <div><strong>Full name: </strong><i>{profile.fullName}</i></div>
        <div><strong>Looking for a job: </strong><i>{profile.lookingForAJob ? "Yes" : "No"}</i></div>
        {profile.lookingForAJob &&
        <div><strong>My professional skills: </strong><i>{profile.lookingForAJobDescription}</i></div>}
        <ul>{Object.keys(profile.contacts).map(item => {
            return <Contact contactTitle={item} contactValue={profile.contacts[item]} key={item}/>
        })}</ul>
    </div>)
}
const Contact = ({contactTitle, contactValue}) => {
    return <li><strong>{contactTitle}</strong>: <i>{contactValue}</i></li>
}
export default ProfileInfo;
