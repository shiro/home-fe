import React from "react";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";

import routes from "routes";
import Store from "state/redux";
import history from "state/redux/history";


//  create the store with the intial state we got
let store = Store(window.__INITIAL_STATE__);


function AppRouter() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                {routes}
            </ConnectedRouter>
        </Provider>
    );
}


export default AppRouter;
