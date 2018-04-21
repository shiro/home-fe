import React from "react";
import { Route,Switch } from "react-router";

import HelloWorld from "components/HelloWorld";
import PageNotFound from "components/PageNotFound";


const routes = (
    <Switch>
        <Route exact path="/" component={HelloWorld}/>
        <Route component={PageNotFound}/>
    </Switch>
);

export default routes;
