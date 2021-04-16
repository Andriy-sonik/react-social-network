import { profileApi } from "../api/api";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

const initialState = {
  posts: [
    { id: 0, message: "Hi, how are you?", likesCount: 10 },
    { id: 1, message: "It's my first post", likesCount: 21 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length,
        message: action.newPostText,
        likesCount: 0,
      };
      return { ...state, posts: [...state.posts, newPost] };
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      console.log(action.postId)
      return { ...state, posts: state.posts.filter((p) => p.id != action.postId) };
    }
    default:
      return state;
  }
};
export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const setUsersProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});
export const getUsersProfile = (userId) => (dispatch) => {
  profileApi.profile(userId).then((response) => {
    dispatch(setUsersProfile(response.data));
  });
};
export const getStatus = (userId) => (dispatch) => {
  profileApi.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  profileApi.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
export default profileReducer;
