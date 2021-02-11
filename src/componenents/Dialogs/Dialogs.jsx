import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
const Dialogs = (props) => {
  const dialogs = [
    { id: 0, name: "Andriy" },
    { id: 1, name: "Dima" },
  ];

  const messages = [
    { id: 0, message: "Hi" },
    { id: 1, message: "DHow is your ITimHow is your IT" },
    { id: 2, message: "Yo" },
  ];
  let dialogsElements = dialogs.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));
  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
