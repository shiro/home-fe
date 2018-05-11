import * as React from "react";
import { renderRoutes, RouteConfig } from "react-router-config";

import "components/Layout/Page/PageLayout.scss";


interface IPageLayoutProps {
    route: RouteConfig;
}

const PageLayout: React.SFC<IPageLayoutProps> = ({ route }) => (
    <div className="container">
        {renderRoutes(route.routes)}
    </div>
);


export default PageLayout;
