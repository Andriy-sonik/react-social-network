import Friend from "./Friend/Friend";
import s from "./Friends.module.css";
const Friends = (props) => {
  let friends = props.friends.map((el) => <Friend data={el} key={el.id} />);
  return <div className={s.friends}>{friends}</div>;
};
export default Friends;
