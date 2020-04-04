import React from 'react';
import './App.css';
import{ BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/login/Login";
import Mainmenu from "./components/mainmenu/Mainmenu";
import Profile from "./components/profile/Profile";
import Register from "./components/register/Register";
import Coursemenu from "./components/coursemenu/Coursemenu";
import Codetranslator from "./components/codetranslator/Codetranslator";

function App() {
  return (
    <Router>
      <Switch>
        
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/mainmenu" component={Mainmenu} />
        <Route exact path="/coursemenu" component={Coursemenu} />
        <Route exact path="/codetranslator" component={Codetranslator} />
        
    </Switch>
    </Router>
  );
}

export default App;
