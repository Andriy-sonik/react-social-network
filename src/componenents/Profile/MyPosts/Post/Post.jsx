import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" />
      {props.message}
      <div>
        <span>like:{props.likesCount}</span>
      </div>
    </div>
  );
};
export default Post;
 