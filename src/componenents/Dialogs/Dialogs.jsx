import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/state";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogsItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let newMessage = React.createRef();
  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };
  let onMessageChange = () => {
    let text = newMessage.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <textarea
          ref={newMessage}
          onChange={onMessageChange}
          value={props.state.newMessageText}
        />
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
