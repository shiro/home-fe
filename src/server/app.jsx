import express from "express";
import renderTemplateMiddleware from "server/middleware/renderTemplate";
import reduxStoreMiddleware from "server/middleware/reduxStore";
import serverSideRenderMiddleware from "server/middleware/serverSideRender";


// create our app
const app = express();

// serve static resources
app.use("/assets", express.static("dist"));

// server everything else
app.get("*",
    reduxStoreMiddleware,
    serverSideRenderMiddleware,
    renderTemplateMiddleware
);

// todo improve error handling
app.use( (err, req, res) =>{
    console.error(err.stack);
    res.status(500).send("Something broke!");
});


export default app;
