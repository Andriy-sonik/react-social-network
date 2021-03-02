import MyPostContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostContainer store={props.store} />
    </div>
  );
};
export default Profile;
