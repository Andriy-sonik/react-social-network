import {stopSubmit} from "redux-form";
import {authApi, securityAPI} from "../api/api";
import {myInput} from "../componenents/common/FormControls/FormControls";

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";
const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null, // if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth},
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl},
});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authApi.getMe();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};
export const login = (email, password, rememberMe, captchaUrl) => async (dispatch) => {
    let response = await authApi.login(email, password, rememberMe,captchaUrl);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaURL())
        }
        let messageError =
            response.data.messages.length > 0
                ? response.data.messages[0]
                : "Common error";
        dispatch(stopSubmit("login", {_error: messageError}));
    }
};
export const logout = () => async (dispatch) => {
    let response = await authApi.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export const getCaptchaURL = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaURL();
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
