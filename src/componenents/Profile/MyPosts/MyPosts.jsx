import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPost = (props) => {
  let postsElements = props.posts.map((el) => (
    <Post message={el.message} likesCount={el.likesCount} key={el.id} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = ''
  };

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPost;
