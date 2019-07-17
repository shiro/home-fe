import * as React from "react";
import { useEffect, useRef, useState } from "react";
import "./MasonGrid.scss";


export interface IMasonGrid {
    children: React.ReactNodeArray;
    columns: number;
}


const MasonGrid: React.FC<IMasonGrid> = (props) => {
    const { children, columns } = props;

    const [renderedColumns, setRenderedColumns] = useState( -1 );
    let [renderedItems, setRenderedItems] = useState( 0 );


    let [columnContainers, setColumnContainers] = useState( [] );

    if (renderedColumns != columns) {
        columnContainers = [];
        setColumnContainers( columnContainers ); // reset
        setRenderedColumns( columns );

        // re-render all items
        renderedItems = 0;
        setRenderedItems( renderedItems );

        for (let i = 0; i < columns; i++) {
            columnContainers[i] = [];
        }
    }

    const columnsContainerRef = useRef<HTMLDivElement>();

    function getColumnElementHeights(): number[] {
        const columnElements = [].slice.call( columnsContainerRef.current.children );
        const heights = columnElements.map( (columnElement) => columnElement.clientHeight );

        return heights;
    }

    function getSmallestColumn(columnHeights = getColumnElementHeights()) {
        const smallestColumnIndex = columnHeights.indexOf( Math.min( ...columnHeights ) );

        return smallestColumnIndex;
    }


    useEffect( () => {
        if (renderedItems != children.length) {
            // const itemsToRender = Math.min( renderedItems + 1, children.length );
            const itemsToRender = renderedItems + 1;

            // get the real height values and use them to guess the heights for the next few elements
            const columnScores = getColumnElementHeights();
            const totalScore = columnScores.reduce( (acc, val) => acc + val );
            const avgChildScore = totalScore / renderedItems || 0;

            for (let i = renderedItems; i < itemsToRender; i++) {
                // add the new item to the (virtually) smallest column and update the virtual score
                const smallestColumn = getSmallestColumn( columnScores );
                columnScores[smallestColumn] += avgChildScore;

                columnContainers[smallestColumn].push( children[i] );
            }

            setRenderedItems( itemsToRender );
        }
    } );


    return (
        <div className="MasonGrid" ref={columnsContainerRef}>
            {columnContainers.map( (currentColumnElements, index) =>
                <div className="column" key={index}>
                    {...currentColumnElements}
                </div> )}
        </div>
    );
};


export default MasonGrid;
