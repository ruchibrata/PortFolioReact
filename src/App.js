import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./css/App.css";

import Nav from "./Nav";
import Home from "./Home";
import Projects from "./Projects";
import Articles from "./Articles";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/articles" component={Articles}></Route>
          <Route exact path="/about" component={About}></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
