import rerenderEntireTree from "../render";

const state = {
  profilePage: {
    posts: [
      { id: 0, message: "Hi, how are you?", likesCount: 10 },
      { id: 1, message: "It's my first post", likesCount: 21 },
    ],
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
  },
  sidebar: {
    friends: [
      { id: 0, name: "Lena" },
      { id: 1, name: "Vova" },
      { id: 2, name: "Kiril" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state)
};

export default state;
