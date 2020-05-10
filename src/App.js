import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SingIn from "./views/SingIN";
import NavBarre from "./components/layouts/NavBarre";

function App() {
  return (
    <div className="App">
      <NavBarre />
      <Switch>
        <Route path="/">
          <SingIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
