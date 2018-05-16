import * as React from "react";

import * as styles from "components/HelloWorld/HelloWorld.scss";


export interface IHelloWorldProps {
    message: string;
}


const HelloWorld: React.SFC<IHelloWorldProps> = (props) =>
    (
        <div>
            <h1 className={styles.helloWorldMessage}>Hello Rabbits!</h1>
            <div className={styles.helloWorldTitle}>message: {props.message}</div>
        </div>
    );


export default HelloWorld;
