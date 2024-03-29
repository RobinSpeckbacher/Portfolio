import React from "react";
import HomeLight from "../views/all-home-version/HomeLight";
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/home-dark" component={HomeDark} />
          <Route path="/home-light" component={HomeLight} />
          
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
