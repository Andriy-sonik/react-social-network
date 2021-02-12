import s from "./Friend.module.css";
const Friend = (props) => {
  return (
    <div className={s.friend}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Happy_smiley_face.png/480px-Happy_smiley_face.png"
        alt=""
      />
      {props.data.name}
    </div>
  );
};
export default Friend;
