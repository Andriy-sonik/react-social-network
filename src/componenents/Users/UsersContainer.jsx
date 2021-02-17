import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToprops = (state) => {
  return { users: state.usersPage.users };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(Users);
