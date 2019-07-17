import * as React from "react";
import "./PostPreviewContainer.scss";

import { useEffect, useState } from "react";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";
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


const GET_ARTICLES = gql`
  {
    articles {
      title
      content
      image
      timeCreated
    }
  }
`;

const PostPreviewContainer: React.FC<IPostPreviewContainer> = (props) => {
    const elementSizeMin = 500;
    const gutter = 30;
    const gutterOuter = 30;

    let width = useWindowSize().width;


    let n = (width - gutterOuter + gutter) / (elementSizeMin + gutter);
    n = Math.floor( n );


    const { data, error, loading } = useQuery( GET_ARTICLES );
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Ooops, something went wrong! ({error.message})</div>;
    }

    const children =
        data.articles.map( article => {
            const formattedTime = new Date( article.timeCreated ).toLocaleDateString();

            return (
                <PostPreview key={article.id} content={article.content} title={article.title} date={formattedTime}/>
            );
        } );


    return (
        <div className="PostPreviewContainer">
            <MasonGrid columns={n}>
                {children}
            </MasonGrid>
        </div>
    );
};


export default PostPreviewContainer;
