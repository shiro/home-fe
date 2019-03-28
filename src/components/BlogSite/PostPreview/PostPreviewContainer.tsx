import * as React from "react";
import "./PostPreviewContainer.scss";
import MasonryLayout from "react-masonry-layout";

import Masonry from "react-masonry-css";
import { useEffect, useState } from "react";
import PostPreview from "components/BlogSite/PostPreview/PostPreview";
import MasonGrid from "components/Layout/MasonGrid/MasonGrid";


export interface IPostPreviewContainer {
}

// Hook
function useWindowSize(): ({ width: number, height: number }) {
    const isClient = typeof window === "object";

    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined,
        };
    }

    const [windowSize, setWindowSize] = useState( getSize );

    useEffect( () => {
        if (!isClient)
            return;

        function handleResize() {
            setWindowSize( getSize() );
        }

        window.addEventListener( "resize", handleResize );

        return () => {
            window.removeEventListener( "resize", handleResize );
        };
    }, [] ); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}

const PostPreviewContainer: React.FC<IPostPreviewContainer> = (props) => {
    const elementSizeMin = 500;
    const gutter = 30;
    const gutterOuter = 30;

    let width = useWindowSize().width;


    let n = (width - gutterOuter + gutter) / (elementSizeMin + gutter);
    n = Math.floor( n );

    let [children, setChildren] = useState( [] );


    useEffect( () => {
        for (let i = 0; i < 50; i++) {
            const content = "Today I took a walk around some of the most popular shrines in Kyoto.";

            let cont = "";
            for (let j = 0; j < (i % 3) * 7; j++) {
                cont += content;
            }

            setTimeout( () => {
                children = [...children, <PostPreview key={i} summary={cont}/>];
                setChildren( children );
            }, Math.random() * 30000 );
        }
    }, [] );

    return (
        <div className="PostPreviewContainer">
            <MasonGrid columns={n}>
                {children}
            </MasonGrid>
        </div>
    );
};


export default PostPreviewContainer;
