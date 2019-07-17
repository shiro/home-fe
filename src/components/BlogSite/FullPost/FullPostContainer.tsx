import * as React from "react";
import "./FullPostContainer.scss";
import { RouteComponentProps } from "react-router";
import FullPost from "components/BlogSite/FullPost/FullPost";
import MorePosts from "components/BlogSite/FullPost/MorePosts";
import Tag from "components/Search/Tag";


export interface IFullPostContainer extends RouteComponentProps<{ id }> {
}


const FullPostContainer: React.FC<IFullPostContainer> = (props) => {
    const { ...rest } = props;
    return (
        <div className="FullPostContainer">
            <FullPost {...rest}/>

            <Tag/>

            <MorePosts/>
        </div>
    );
};


export default FullPostContainer;
