import React from "react";
import { Switch, Route } from "react-router-dom";
import FlixDetails from "../FlixDetails/FlixDetails";
import Home from "../Home/Home";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/FlixDetails/:id" component={FlixDetails} />
  </Switch>
);

export default Router;
