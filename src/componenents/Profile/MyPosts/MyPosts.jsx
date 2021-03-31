import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
  let postsElements = props.posts.map((el) => (
    <Post message={el.message} likesCount={el.likesCount} key={el.id} />
  ));
  let newPostElement = React.createRef();

  let onSubmitPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <AddPostFormRedux onSubmit={onSubmitPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newPostText"
          placeholder="Enter your post text"
        />
      </div>
      <button>Add post</button>
    </form>
  );
};
const AddPostFormRedux = reduxForm({ form: "postAddTextForm" })(AddPostForm);
export default MyPost;
