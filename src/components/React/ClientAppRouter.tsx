import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";

import { ApolloProvider } from "react-apollo-hooks";
import ApolloClient from "apollo-boost";
import App from "components/App";
import { IWindow } from "server/serverTypes";
import history from "state/redux/history";
import Store from "state/redux/reduxStore";


//  create the store with the initial state we got
const initialState = (window as IWindow).__INITIAL_STATE__;
const { store } = Store( initialState );


const client = new ApolloClient( {
    uri: "http://localhost:8080/query"
} );

const ClientAppRouter = () =>
    (

        <ApolloProvider client={client}>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App/>
                </ConnectedRouter>
            </Provider>
        </ApolloProvider>
    );


export default ClientAppRouter;
