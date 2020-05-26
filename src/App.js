import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
const Home = lazy(() => import("./components/Home/CoronaCasesTable"));
const Weather = lazy(() => import("./components/Weather/Weather"));
const SignUp = lazy(() => import("./components/SignUp/SignUp"));
const SignIn = lazy(() => import("./components/SignIn/SignIn"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        }
      >
        <Router>
          <Route component={SignUp} path="/signup" exact />
          <Route component={SignIn} path="/signin" exact />
          <Route component={Home} path="/home" exact />
          <Route component={Weather} path="/weather/state/:name" exact />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
