import React from "react";
import SingIn from "./views/singIn";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <SingIn />
      </Route>
    </Switch>
  );
};

export default Routes;
