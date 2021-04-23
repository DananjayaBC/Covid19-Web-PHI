import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Signup from './login/SignUp'
import Dashboard from './login/Dashboard'
import Login from './login/Login'
import Navb from "../layout/Navbar"
import Home from "./Home"
import Delete from './Delete'
import Health from './Health'
import Contacts from './Contacts'

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route exact path="/navb" component={Navb} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/delete" component={Delete} />
        <Route exact path="/health" component={Health} />
        <Route exact path="/contacts" component={Contacts} />

      </Switch>

    </Router>
  );
}

export default App;
