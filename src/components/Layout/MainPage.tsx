import * as React from "react";
import { Route, RouteComponentProps, Switch } from "react-router";

import NotFound from "components/Layout/NotFound/NotFound";
import HelloContainer from "containers/HelloContainer/HelloContainer";


type IProps = RouteComponentProps<any>;


const MainPage: React.SFC<{}> = () => (
    <Switch>
        <Route path="/" component={HelloContainer}/>
        <Route component={NotFound}/>
    </Switch>
);


export default MainPage;
