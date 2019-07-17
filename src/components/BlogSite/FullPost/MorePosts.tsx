import * as React from "react";
import "./MorePosts.scss";
import PostPreviewContainer from "components/BlogSite/PostPreview/PostPreviewContainer";


export interface IMorePosts {
}


const MorePosts: React.FC<IMorePosts> = (props) => {
    return (
        <div className="MorePosts">
            <h1 className="heading">More Posts</h1>

            <PostPreviewContainer/>
        </div>
    );
};


export default MorePosts;
