import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./componenents/Dialogs/Dialogs";
import Header from "./componenents/Header/Header";
import Navbar from "./componenents/Navbar/Navbar";
import Profile from "./componenents/Profile/Profile";
import News from "./componenents/News/News";
import Music from "./componenents/Music/Music";
import Setting from "./componenents/Setting/Setting";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/setting" component={Setting} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
