import * as React from "react";
import { Route, Switch } from "react-router";

import NotFound from "components/Layout/NotFound/NotFound";
import HelloContainer from "containers/HelloContainer/HelloContainer";


const MainPage: React.SFC = () => (
    <Switch>
        <Route path="/" component={HelloContainer}/>
        <Route component={NotFound}/>
    </Switch>
);


export default MainPage;
