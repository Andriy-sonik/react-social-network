import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "93cbc3cd-6938-4d1a-b91b-05666ea70cee",
    },
});
export const usersAPI = {
    getUser(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },
};
export const followAPI = {
    unfollow(userID) {
        return instance.delete(`follow/${userID}`);
    },
    follow(userID) {
        return instance.post(`follow/${userID}`);
    },
};
export const authApi = {
    getMe() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
};
export const profileApi = {
    profile(userID) {
        return instance.get(`profile/${userID}`);
    },
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}});
    },
};
