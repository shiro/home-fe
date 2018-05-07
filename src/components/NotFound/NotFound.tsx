import * as React from "react";


class NotFound extends React.Component<any, any> {
    public render(): React.ReactNode {
        if (this.props.staticContext)
            this.props.staticContext.res.status(404);

        return ("404 - Go elsewhere!");
    }
}


export default NotFound;
