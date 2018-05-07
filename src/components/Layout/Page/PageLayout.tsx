import * as React from "react";
import {renderRoutes} from "react-router-config";

import "components/Layout/Page/PageLayout.scss";

interface IProps {
    route: any;
}

const PageLayout: React.SFC<IProps> = ({route}) =>
    (
        <div className="container">
            {renderRoutes(route.routes)}
        </div>
    );


export default PageLayout;
