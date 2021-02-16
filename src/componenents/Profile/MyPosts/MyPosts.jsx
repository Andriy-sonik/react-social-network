import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
  let postsElements = props.posts.map((el) => (
    <Post message={el.message} likesCount={el.likesCount} key={el.id} />
  ));
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPost;
