import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, message: "Hi, how are you?", likesCount: 10 },
        { id: 1, message: "It's my first post", likesCount: 21 },
      ],
      newPostText: "it-kamasutra.com",
    },
    dialogsPage: {
      dialogs: [
        { id: 0, name: "Andriy" },
        { id: 1, name: "Dima" },
      ],
      messages: [
        { id: 0, message: "Hi" },
        { id: 1, message: "DHow is your ITimHow is your IT" },
        { id: 2, message: "Yo" },
      ],
      newMessageText: "",
    },
    sidebar: {
      friends: [
        { id: 0, name: "Lena" },
        { id: 1, name: "Vova" },
        { id: 2, name: "Kiril" },
      ],
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
