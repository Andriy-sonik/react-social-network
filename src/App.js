import { Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./componenents/Dialogs/Dialogs";
import Header from "./componenents/Header/Header";
import Navbar from "./componenents/Navbar/Navbar";
import Profile from "./componenents/Profile/Profile";
import News from "./componenents/News/News";
import Music from "./componenents/Music/Music";
import Setting from "./componenents/Setting/Setting";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.sidebar} />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile
              state={props.state.profilePage}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              state={props.state.dialogsPage}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/setting" component={Setting} />
      </div>
    </div>
  );
};

export default App;
