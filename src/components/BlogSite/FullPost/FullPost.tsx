import * as React from "react";
import "./FullPost.scss";
import { RouteComponentProps } from "react-router";


export interface IFullPost extends RouteComponentProps<{ id }> {
}


const FullPost: React.FC<IFullPost> = (props) => {
    return (
        <article className="FullPost">
            <h1 className="heading">Visiting Kyoto's shrines</h1>
            <p>
                Today I took a walk around some of the most popular shrines in Kyoto.
                The journey was full of fun, food, culture and much more!
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat lorem sit amet mattis gravida.
                Etiam vel odio libero. Quisque dignissim felis non purus congue pulvinar. Vivamus et arcu ut ex
                consectetur cursus vitae at erat.
            </p>
            <p>
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi tempor
                leo tellus, auctor tempor nibh aliquam id.
            </p>

            <figure>
                <img src="/assets/stock-temple1.png" alt="Kiyu Mizu Dera Shrine" width="2000px"/>
                <figcaption>Picture: the Kiyu-Mizu Dera shrine in Kyoto</figcaption>
            </figure>

            <blockquote>
                Today I took a walk around some of the most popular shrines in Kyoto.
                The journey was full of fun, food, culture and much more!
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat lorem sit amet mattis gravida.
                Etiam vel odio libero. Quisque dignissim felis non purus congue pulvinar. Vivamus et arcu ut ex
                consectetur cursus vitae at erat.


                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi tempor
                leo tellus, auctor tempor nibh aliquam id.
            </blockquote>
        </article>
    );
};


export default FullPost;
