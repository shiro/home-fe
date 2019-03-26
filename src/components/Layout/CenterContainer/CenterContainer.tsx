import * as React from "react";
import "./CenterContainer.scss";
import { ReactChild, ReactNode } from "react";


export interface ICenterContainer {
}


const CenterContainer: React.FC<ICenterContainer> = (props) => {
    return (
        <div className="CenterContainer">
            {props.children}
        </div>
    );
};


export default CenterContainer;
