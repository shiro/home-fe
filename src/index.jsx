import React from "react";
import { render } from "react-dom";

import AppRouter from "components/AppRouter";


const renderApp = (app) => {
    render(app, document.getElementById("app"));
};

window.onload = () => {
    renderApp(<AppRouter/>);
};

// hot swapping with WDS
if (module.hot) {
    module.hot.accept("components/AppRouter", () => {
        let NewAppRouter = require("components/AppRouter").default;
        renderApp(<NewAppRouter/>);
    }
    );
}

