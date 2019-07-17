import * as React from "react";
import "./PostPreview.scss";


export interface IPostPreview {
    title: string;
    content: string;
    image?: string;
    date: string;
}

const PostPreview: React.FC<IPostPreview> = (props) => {
    const { title, content, image = "/assets/stock-temple1.png", date } = props;

    return (
        <article className="PostPreview">
            {image &&
            <div className="preview-image-container">
                <img className="preview-image"
                     src={image} alt="stock temple"/>
            </div>
            }

            <div className="content">
                <h1 className="title">{title}</h1>
                <p className="summary">
                    {content}
                </p>

                <span className="date">{date}</span>
            </div>
        </article>
    );
};


export default PostPreview;
