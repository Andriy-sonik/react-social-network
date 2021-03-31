const ADD_MESSAGE = "ADD-MESSAGE";

const initialState = {
  dialogs: [
    { id: 0, name: "Andriy" },
    { id: 1, name: "Dima" },
  ],
  messages: [
    { id: 0, message: "Hi" },
    { id: 1, message: "DHow is your ITimHow is your IT" },
    { id: 2, message: "Yo" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messages.length,
        message: action.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE,newMessageText });
export default dialogsReducer;
