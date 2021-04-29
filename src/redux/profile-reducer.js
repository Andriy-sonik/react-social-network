import {profileApi} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

const initialState = {
    posts: [
        {id: 0, message: "Hi, how are you?", likesCount: 10},
        {id: 1, message: "It's my first post", likesCount: 21},
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
            return {...state, posts: [...state.posts, newPost]};
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}};
        }
        case DELETE_POST: {
            console.log(action.postId);
            return {
                ...state,
                posts: state.posts.filter((p) => p.id != action.postId),
            };
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
export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos,
});
export const getUsersProfile = (userId) => async (dispatch) => {
    let response = await profileApi.profile(userId);
    dispatch(setUsersProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileApi.getStatus(userId);
    dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileApi.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileApi.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};
export const saveProfile = (profile) => async (dispatch,getState) => {
    let response = await profileApi.saveProfile(profile);
    const userId = getState().auth.userId
    if (response.data.resultCode === 0) {
        dispatch(getUsersProfile(userId));
    }else{
        dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0])
    }
};
export default profileReducer;
