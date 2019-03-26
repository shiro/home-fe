import * as React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationBar.scss";


export interface INavigationBar {
}


const NavigationBar: React.FC<INavigationBar> = () => {
    return (
        <nav className="NavigationBar">
            <NavLink className="nav-item"
                exact={true} activeClassName="active" to="/blog">Blog</NavLink>
            <NavLink className="nav-item"
                exact={true} activeClassName="active" to="/me">ME</NavLink>
        </nav>);
};


export default NavigationBar;
