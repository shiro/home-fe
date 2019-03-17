import * as React from "react";
import { Route, Switch } from "react-router";

import NotFound from "components/NotFound/NotFound";
import HelloContainer from "components/HelloContainer/HelloContainer";


const App: React.FC = () => (
    <Switch>
        <Route path="/" component={HelloContainer}/>
        <Route component={NotFound}/>
    </Switch>
);


export default App;
