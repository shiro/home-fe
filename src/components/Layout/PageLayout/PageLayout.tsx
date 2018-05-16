import * as React from "react";
import { RouteComponentProps } from "react-router";
import { renderRoutes } from "react-router-config";

import * as styles from "components/Layout/PageLayout/PageLayout.scss";


interface IPageLayoutProps {
    foo?: string;
}

type IProps = IPageLayoutProps & RouteComponentProps<any>;
// type IProps = IPageLayoutProps;


const PageLayout: React.SFC<IProps> = ({ route }) => (
    <div className={styles.container}>
        {renderRoutes(route.routes)}
    </div>
);


export default PageLayout;
