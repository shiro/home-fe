import React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";

import App from "components/App";


const ServerAppRouter = ({ context, store, location }) =>
    (
        <Provider store={store}>
            <StaticRouter context={context} location={location}>
                <App/>
            </StaticRouter>
        </Provider>
    );


export default ServerAppRouter;
