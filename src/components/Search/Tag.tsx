import * as React from "react";
import "./Tag.scss";


export interface ITag {
}


const Tag: React.FC<ITag> = (props) => {
    return (
        <div className="Tag">
            Travel
        </div>
    );
};


export default Tag;
