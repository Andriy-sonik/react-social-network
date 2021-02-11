import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPost = () => {
  const posts = [
    { id: 0, message: "Hi, how are you?", likesCount: 10 },
    { id: 1, message: "It's my first post", likesCount: 21 },
  ];
  let postsElements = posts.map((el) => (
    <Post message={el.message} likesCount={el.likesCount} />
  ));
  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPost;
