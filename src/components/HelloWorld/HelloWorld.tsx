import * as React from "react";

import "components/HelloWorld/HelloWorld.scss";
import config from "config/client.config.jsx";


export interface IHelloWorldProps {
    message: string;
}


const HelloWorld: React.FC<IHelloWorldProps> = (props) => {
    return (
        <div className="HelloWorld">
            <h1 className="heading">Hello Rabbits!</h1>
            <div className="message">message: {props.message}</div>
            <div>current branch: {JSON.stringify(config)}</div>
        </div>);
};


export default HelloWorld;
