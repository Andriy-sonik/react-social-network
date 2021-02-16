import MyPostContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPostContainer store={props.store} />
    </div>
  );
};
export default Profile;
