import React from "react";
import { render } from "react-dom";

import AppRouter from "components/React/ClientAppRouter";


const renderApp = (app) =>{
    render(app, document.getElementById("app"));
};

window.onload = () =>{
    renderApp(<AppRouter/>);
};

// hot swapping with WDS
if(module.hot){
    module.hot.accept("components/React/ClientAppRouter", () =>{
        let NewAppRouter = require("components/React/ClientAppRouter").default;
        renderApp(<NewAppRouter/>);
    }
    );
}

