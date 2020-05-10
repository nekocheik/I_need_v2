import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SingIn from "./views/SingIN";
import NavBarre from "./components/layouts/NavBarre";
import PageWrap from "./components/layouts/PageWrap";

function App() {
  return (
    <div className="App font-Roboto bg-quaternary-color">
      <div className="flex flex-col">
        <NavBarre />
        <PageWrap>
          <Switch>
            <Route path="/">
              <SingIn />
            </Route>
          </Switch>
        </PageWrap>
      </div>
    </div>
  );
}

export default App;
