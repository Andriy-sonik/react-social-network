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
};
export const profileApi = {
  profile(userID) {
    return instance.get(`profile/${userID}`);
  },
};
