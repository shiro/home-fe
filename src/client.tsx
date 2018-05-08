import React from "react";
import { hydrate, render } from "react-dom";

import AppRouter from "components/React/ClientAppRouter";


const renderApp = (app) => {
    const root = document.getElementById("app");

    // render or hydrate depending on SSR being enabled or not
    const method = root.children.length === 0 ? hydrate : render;

    method.call(this, app, root);
};

window.onload = () => {
    renderApp(<AppRouter/>);
};

// hot swapping with WDS
if((module as any).hot) {
    module.hot.accept("components/React/ClientAppRouter", () => {
        const NewAppRouter = require("components/React/ClientAppRouter").default;
        renderApp(<NewAppRouter/>);
    },
    );
}

