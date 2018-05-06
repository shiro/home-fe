import React from "react";
import { renderRoutes } from "react-router-config";
import PropTypes from "prop-types";

import "components/Layout/Page/PageLayout.scss";


PageLayout.propTypes = {
    route: PropTypes.object.isRequired,
};

function PageLayout({ route }){
    return (
        <div className="container">
            {renderRoutes(route.routes)}
        </div>
    );
}


export default PageLayout;
