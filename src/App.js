import { Route } from "react-router-dom";
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

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainers />} />
        <Route path="/login" component={Login} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/setting" component={Setting} />
      </div>
    </div>
  );
};

export default App;
