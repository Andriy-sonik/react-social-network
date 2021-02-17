import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./componenents/Dialogs/DialogsContainer";
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
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/setting" component={Setting} />
      </div>
    </div>
  );
};

export default App;
