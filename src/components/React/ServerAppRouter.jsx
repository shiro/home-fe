import React from "react";
import { StaticRouter } from "react-router";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import PropTypes from "prop-types";

import routes from "routes/routes";


ServerAppRouter.propTypes = {
    context: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    location: PropTypes.string.isRequired,
};

function ServerAppRouter({ context, store, location }){
    return (
        <Provider store={store}>
            <StaticRouter context={context} location={location}>
                {renderRoutes(routes)}
            </StaticRouter>
        </Provider>
    );
}


export default ServerAppRouter;
