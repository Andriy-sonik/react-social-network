import { profileApi } from "../api/api";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  posts: [
    { id: 0, message: "Hi, how are you?", likesCount: 10 },
    { id: 1, message: "It's my first post", likesCount: 21 },
  ],
  newPostText: "it-kamasutra.com",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length,
        message: state.newPostText,
        likesCount: 0,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUsersProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const getUsersProfile = (userId) => (dispatch) => {
  profileApi.profile(userId).then((response) => {
    dispatch(setUsersProfile(response.data));
  });
};
export default profileReducer;
