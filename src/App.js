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
        
        <Route exact path="/mainmenu"> 
        <Mainmenu/>
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/mainmenu/codetranslator" component={Codetranslator} />
        <Route exact path="/mainmenu/codetranslator/coursemenu" component={Coursemenu} /> 
        <Route path="/"><Mainmenu/></Route> 
    </Switch>
    </Router>
  );
}

export default App;
