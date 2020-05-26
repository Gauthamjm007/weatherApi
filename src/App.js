import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/CoronaCasesTable";
import Weather from "./components/Weather/Weather";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route component={SignIn} path="/signin" exact />
          <Route component={Home} path="/home" exact />
          <Route component={Weather} path="/weather/state/:name" exact />
          <Route component={SignUp} path="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
