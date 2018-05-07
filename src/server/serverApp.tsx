import * as express from "express";
import reduxStoreMiddleware from "server/middleware/reduxStoreMiddleware";
import renderTemplateMiddleware from "server/middleware/renderTemplateMiddleware";
import serverSideRenderMiddleware from "server/middleware/serverSideRenderMiddleware";


// create our app
const serverApp = express();

// serve static resources
serverApp.use("/assets", express.static("dist"));

// server everything else
serverApp.get("*",
    reduxStoreMiddleware,
    serverSideRenderMiddleware,
    renderTemplateMiddleware,
);

// todo improve error handling
serverApp.use((err: any, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

export default serverApp;
