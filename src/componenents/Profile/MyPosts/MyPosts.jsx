import React, { Component, PureComponent } from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { textArea } from "../../common/FormControls/FormControls";
import {
  required,
  maxLengthCreator,
} from "./../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);
const MyPost = React.memo((props) => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props || nextState != this.state;
  // }
  let postsElements = props.posts.map((el) => (
    <Post message={el.message} likesCount={el.likesCount} key={el.id} />
  ));

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
});
const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={textArea}
          name="newPostText"
          placeholder="Enter your post text"
          validate={[required, maxLength10]}
        />
      </div>
      <button>Add post</button>
    </form>
  );
};
const AddPostFormRedux = reduxForm({ form: "postAddTextForm" })(AddPostForm);
export default MyPost;
