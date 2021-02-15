import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/state";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
  let postsElements = props.posts.map((el) => (
    <Post message={el.message} likesCount={el.likesCount} key={el.id} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
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
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPost;
