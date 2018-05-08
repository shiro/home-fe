import React from "react";
import { render, hydrate } from "react-dom";

import AppRouter from "components/React/ClientAppRouter";


const renderApp = (app) => {
    const root = document.getElementById("app");
    
    // render or hydrate depending on SSR being enabled or not
    const method = root.children.length ? hydrate : render;
    
    method.call(this, app, root);
};

window.onload = () => {
    renderApp(<AppRouter/>);
};

// hot swapping with WDS
if(module.hot) {
    module.hot.accept("components/React/ClientAppRouter", () => {
        let NewAppRouter = require("components/React/ClientAppRouter").default;
        renderApp(<NewAppRouter/>);
    }
    );
}

