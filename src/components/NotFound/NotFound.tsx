import * as React from "react";
import { RouteComponentProps } from "react-router";

import { IStaticContext } from "server/serverTypes";


type IProps = RouteComponentProps<{}, IStaticContext>;

const NotFound: React.SFC<IProps> = (props) => {
    if (props.staticContext)
        props.staticContext.res.status(404);

    return (
        <React.Fragment>
            404 - Go elsewhere!
        </React.Fragment>
    );
};


export default NotFound;
