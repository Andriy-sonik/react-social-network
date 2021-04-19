import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
let Users = (props) => {
  return (
    <div>
      <div className={s.users}>
        {props.users.map((u) => (
          <User
            key={u.id}
            user={u}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
      <hr />
      <Paginator
        currentPage={props.currentPage}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        onPageChanged={props.onPageChanged}
      />
    </div>
  );
};
export default Users;
