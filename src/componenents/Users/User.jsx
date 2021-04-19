import s from "./Users.module.css";
import userPhoto from "../../assets/images/userDefault.jpg";
import { NavLink } from "react-router-dom";
let User = (props) => {
  return (
    <div className={s.user}>
      <div>
        <div>
          <NavLink to={`/profile/${props.user.id}`}>
            <img
              src={props.user.photos.small !== null ? props.user.photos.small : userPhoto}
              alt=""
              className={s.usersPhoto}
            />
          </NavLink>
        </div>
        <div>
          {props.user.followed ? (
            <button
              disabled={props.followingInProgress.some((id) => id === props.user.id)}
              onClick={() => {
                props.unfollow(props.user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some((id) => id === props.user.id)}
              onClick={() => {
                props.follow(props.user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div>
        <span>
          <div>{props.user.name}</div>
          <div>{props.user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </div>
    </div>
  );
};
export default User;
