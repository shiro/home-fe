import "./SearchBar.scss";
import * as React from "react";
import SearchBox from "components/Search/SearchBox";


export interface ISearchBar {
}


const SearchBar: React.FC<ISearchBar> = (props) => {
    return (
        <div className="SearchBar">
            <SearchBox/>
        </div>);
};


export default SearchBar;
