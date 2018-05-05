import express from "express";

import config from "config/server";

import msg from "./foo";


console.log(msg);

// create our app
const app = express();

// serve static resources
app.use("/assets", express.static("dist"));

// server everything else
app.get("*",
    (req, res) =>{
        // console.log("req");
        res.sendFile("app.html", { root: config.path.assets });
    }
);


export default app;
