import * as React from "react";
import { Route, RouteComponentProps, Switch } from "react-router";

import NotFound from "components/NotFound/NotFound";
import config from "config/client.config.jsx";
import UnderConstruction from "components/UnderConstruction/UnderConstruction";
import NavigationBar from "components/NavigationBar/NavigationBar";


const mainComponent = config.branch === "master" ? UnderConstruction : null;

const App: React.FC = () => (
    <>
        <NavigationBar/>
        <Switch>
            <Route path="/" component={mainComponent}/>
            <Route component={NotFound}/>
        </Switch>
    </>
);


export default App;
