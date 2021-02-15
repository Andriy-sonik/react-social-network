const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
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
      newMessageText: "Hello!",
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
    switch (action.type) {
      case ADD_POST:
        let newPost = {
          id: this._state.profilePage.posts.length,
          message: this._state.profilePage.newPostText,
          likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
        break;
      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        break;
      case ADD_MESSAGE:
        let newMessage = {
          id: this._state.dialogsPage.messages.length,
          message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this._callSubscriber(this._state);
        break;
      case UPDATE_NEW_MESSAGE_TEXT:
        this._state.dialogsPage.newMessageText = action.newText;
        this._callSubscriber(this._state);
        break;
      default:
        console.log("Error");
    }
  },
};

export default store;

window.store = store;
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});
