import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import { textArea } from "../common/FormControls/FormControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100);

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogsItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageText);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <AddMessageFormReduc onSubmit={addNewMessage} />
    </div>
  );
};
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={textArea}
        validate={[required, maxLength100]}
        name="newMessageText"
        placeholder="Enter your message"
      />
      <button>Add message</button>
    </form>
  );
};

const AddMessageFormReduc = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);
export default Dialogs;
