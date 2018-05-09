import React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";
import { renderRoutes } from "react-router-config";

import routes from "routes/routes";


const ServerAppRouter = ({ context, store, location }) =>
    (
        <Provider store={store}>
            <StaticRouter context={context} location={location}>
                {renderRoutes(routes)}
            </StaticRouter>
        </Provider>
    );


export default ServerAppRouter;
