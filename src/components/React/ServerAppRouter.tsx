import React from "react";
import { Provider } from "react-redux";
import { StaticRouter, withRouter } from "react-router";

import MainPage from "components/Layout/MainPage";


const ServerAppRouter = ({ context, store, location }) =>
    (
        <Provider store={store}>
            <StaticRouter context={context} location={location}>
                <MainPage/>
            </StaticRouter>
        </Provider>
    );


export default ServerAppRouter;
