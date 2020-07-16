import React from "react";
import "./App.css";
import Navbar from "./layout/Navbar"
import Home from "./layout/Home"
import Chat from "./layout/Chat"

import Profile from "./layout/Profile"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;




