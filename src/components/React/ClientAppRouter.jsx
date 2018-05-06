import React from "react";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

import Store from "state/redux/reduxStore";
import history from "state/redux/history";
import routes from "routes/routes";

//  create the store with the intial state we got
let { store } = Store(window.__INITIAL_STATE__);


function ClientAppRouter(){
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                {renderRoutes(routes)}
            </ConnectedRouter>
        </Provider>
    );
}


export default ClientAppRouter;
