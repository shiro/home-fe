import * as React from "react";
import "./PostPreviewContainer.scss";


export interface IPostPreviewContainer {
}


const PostPreviewContainer: React.FC<IPostPreviewContainer> = (props) => {
    return (
        <div className="PostPreviewContainer">
            {props.children}
        </div>
    );
};


export default PostPreviewContainer;
