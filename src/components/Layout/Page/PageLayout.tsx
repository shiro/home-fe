import * as React from "react";
import { renderRoutes, RouteConfig } from "react-router-config";

import "components/Layout/Page/PageLayout.scss";


interface IProps {
    route: RouteConfig;
}

const PageLayout: React.SFC<IProps> = ({ route }) => (
    <div className="container">
        {renderRoutes(route.routes)}
    </div>
);


export default PageLayout;
