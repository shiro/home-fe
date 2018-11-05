import * as React from "react";

import * as styles from "components/HelloWorld/HelloWorld.scss";
import config from "config/client.config";


export interface IHelloWorldProps {
    message: string;
}


const HelloWorld: React.SFC<IHelloWorldProps> = (props) => {
    if (config.branch === "master")
        return <div><h1>Under Construction</h1><p>Expect a shiny new Blog soon!</p></div>;

    return (
        <div>
            <h1 className={styles.helloWorldMessage}>Hello Rabbits!</h1>
            <div className={styles.helloWorldTitle}>message: {props.message}</div>
            <div>current branch: {JSON.stringify(config)}</div>
        </div>);
};


export default HelloWorld;
