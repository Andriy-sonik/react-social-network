const initialState = {
  friends: [
    { id: 0, name: "Lena" },
    { id: 1, name: "Vova" },
    { id: 2, name: "Kiril" },
  ],
};
const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default sidebarReducer;
