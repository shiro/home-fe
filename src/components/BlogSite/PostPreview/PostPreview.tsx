import * as React from "react";
import "./PostPreview.scss";


export interface IPostPreview {
}


const PostPreview: React.FC<IPostPreview> = (props) => {
    return (
        <article className="PostPreview">
            <img className="preview-image"
                 src="/assets/stock-temple1.png" alt="stock temple"/>

            <div className="content">
                <h1 className="title">Visiting Kyoto's shrines</h1>
                <p className="summary">
                    Today I took a walk around some of the most popular shrines in Kyoto.
                    The journey was full of fun, food, culture and much more!
                </p>

                <span className="date">June 18, 2019</span>
            </div>
        </article>
    );
};


export default PostPreview;
