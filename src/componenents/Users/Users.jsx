import s from "./Users.module.css";
import userPhoto from "../../assets/images/userDefault.jpg";
let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
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
      <hr />
      <div className={s.users}>
        {props.users.map((u) => (
          <div key={u.id} className={s.user}>
            <div>
              <div>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  alt=""
                  className={s.usersPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
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
    </div>
  );
};
export default Users;
