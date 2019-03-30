import * as React from "react";
import "./FullPost.scss";
import { RouteComponentProps } from "react-router";


export interface IFullPost extends RouteComponentProps<{ id }> {
}


const FullPost: React.FC<IFullPost> = (props) => {
    return (
        <div className="FullPost">
            {props.match.params.id}
        </div>
    );
};


export default FullPost;
