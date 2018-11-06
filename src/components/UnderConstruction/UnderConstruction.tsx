import cn from "classnames";
import * as React from "react";

import "./UnderConstruction.sass";


interface Props {
    className?: string;
}

const UnderConstruction: React.SFC<Props> = (props) => {
    const { className } = props;

    return (
        <div className={cn("UnderConstruction", className)}>
            <section className="upperHalf">
                <h1>Under Construction</h1>
            </section>
            <section className="lowerHalf">
                <p>Expect a shiny new Blog soon!</p>
            </section>
        </div>
    );
};

export default UnderConstruction;
