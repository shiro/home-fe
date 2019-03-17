import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";

import App from "components/App";
import { IWindow } from "server/serverTypes";
import history from "state/redux/history";
import Store from "state/redux/reduxStore";


//  create the store with the initial state we got
const initialState = (window as IWindow).__INITIAL_STATE__;
const { store } = Store(initialState);


const ClientAppRouter = () =>
    (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </Provider>
    );


export default ClientAppRouter;
