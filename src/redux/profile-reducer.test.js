import profileReducer from "./profile-reducer";
import { addPostActionCreator, deletePost } from "./profile-reducer";

const initialState = {
  posts: [
    { id: 0, message: "Hi, how are you?", likesCount: 10 },
    { id: 1, message: "It's my first post", likesCount: 21 },
  ],
};

test("length of post should be incremented", () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra.com");
  // 2.action
  let newState = profileReducer(initialState, action);
  // 3/expectation
  expect(newState.posts.length).toBe(3);
});
test("message of new post should be correct", () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra.com");

  // 2.action
  let newState = profileReducer(initialState, action);
  // 3/expectation
  expect(newState.posts[2].message).toBe("it-kamasutra.com");
});

test("after deleting length should be decrement", () => {
  // 1. test data
  let action = deletePost(1);

  // 2.action
  let newState = profileReducer(initialState, action);
  // 3/expectation
  expect(newState.posts.length).toBe(1);
});
test("after deleting length shouldnt be decrement if id incorrect", () => {
  // 1. test data
  let action = deletePost(100);

  // 2.action
  let newState = profileReducer(initialState, action);
  // 3/expectation
  expect(newState.posts.length).toBe(2);
});
