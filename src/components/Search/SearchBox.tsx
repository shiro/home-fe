import * as React from "react";
import { useState } from "react";

import "./SearchBox.scss";


export interface ISearchBox {
}


const SearchBox: React.FC<ISearchBox> = (props) => {
    const [searchText, setSearchText] = useState( "" );

    return (
        <div className="SearchBox">
            <input className="input-box"
                placeholder="Search my blog"
                type="text" value={searchText} onChange={e => setSearchText(e.target.value)}/>
        </div>);
};


export default SearchBox;
