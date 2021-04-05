import { Route, withRouter } from "react-router-dom";
import { Component } from "react";
import "./App.css";
import DialogsContainer from "./componenents/Dialogs/DialogsContainer";
import HeaderContainer from "./componenents/Header/HeaderContainer";
import Navbar from "./componenents/Navbar/Navbar";
import ProfileContainer from "./componenents/Profile/ProfileContainer";
import News from "./componenents/News/News";
import Music from "./componenents/Music/Music";
import Setting from "./componenents/Setting/Setting";
import UsersContainers from "./componenents/Users/UsersContainer";
import Login from "./componenents/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./componenents/common/Preloader/Preloader";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    } else {
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainers />} />
            <Route path="/login" component={Login} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/setting" component={Setting} />
          </div>
        </div>
      );
    }
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
