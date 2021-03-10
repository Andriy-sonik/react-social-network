import axios from "axios";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/userDefault.jpg";
import { NavLink } from "react-router-dom";
import { followAPI } from "../../api/api";
let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={s.users}>
        {props.users.map((u) => (
          <div key={u.id} className={s.user}>
            <div>
              <div>
                <NavLink to={`/profile/${u.id}`}>
                  <img
                    src={u.photos.small !== null ? u.photos.small : userPhoto}
                    alt=""
                    className={s.usersPhoto}
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      followAPI.deleteFollow(u.id).then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      followAPI.postFollow(u.id).then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                      });
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className={s.paginations}>
        {pages.map((p) => {
          return (
            <button
              className={props.currentPage === p ? s.selectedPage : null}
              key={p}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default Users;
