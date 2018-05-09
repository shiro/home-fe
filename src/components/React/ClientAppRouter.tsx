import React from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { ConnectedRouter } from "react-router-redux";

import routes from "routes/routes";
import history from "state/redux/history";
import Store from "state/redux/reduxStore";

//  create the store with the intial state we got
const { store } = Store((window as any).__INITIAL_STATE__);


const ClientAppRouter = () =>
    (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                {renderRoutes(routes)}
            </ConnectedRouter>
        </Provider>
    );


export default ClientAppRouter;
