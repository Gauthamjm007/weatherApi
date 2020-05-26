import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/CoronaCasesTable";
import Weather from "./components/weather/weather";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
// const Home = lazy(() => import("./components/Home/CoronaCasesTable"));
// const Weather = lazy(() => import("./components/Weather/Weather"));
// const SignUp = lazy(() => import("./components/SignUp/SignUp"));
// const SignIn = lazy(() => import("./components/SignIn/SignIn"));

function App() {
  return (
    <>
      {/* <Suspense
        fallback={
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        }
      > */}
      <Router>
        <Switch>
          <Route component={SignIn} path="/signin" exact />
          <Route component={Home} path="/home" exact />
          <Route component={Weather} path="/weather/state/:name" />
          <Route component={SignUp} path="/" />
        </Switch>
      </Router>
      {/* </Suspense> */}
    </>
  );
}

export default App;
