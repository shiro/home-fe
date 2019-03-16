import * as React from "react";

import * as styles from "components/HelloWorld/HelloWorld.scss";
import config from "config/client.config.jsx";

import UnderConstruction from "components/UnderConstruction/UnderConstruction";


export interface IHelloWorldProps {
    message: string;
}


const HelloWorld: React.FC<IHelloWorldProps> = (props) => {
    if (config.branch === "master")
        return <UnderConstruction/>;

    return (
        <div>
            <h1 className={styles.helloWorldMessage}>Hello Rabbits!</h1>
            <div className={styles.helloWorldTitle}>message: {props.message}</div>
            <div>current branch: {JSON.stringify(config)}</div>
        </div>);
};


export default HelloWorld;
