import objectAssignDeep from "object-assign-deep";

import { webpackPaths, webpackFiles } from "config/webpack.config";


const prod = {};

const dev = {};

const envConfig = process.env.NODE_ENV === "production" ? prod : dev;


export default objectAssignDeep(
    {
        path: {
            root: webpackPaths.appRoot,
            dist: webpackPaths.serverDest,
            assets: webpackPaths.clientDest,
        },
        files: {
            htmlTemplate: webpackFiles.htmlTemplateDest,
        },
    },
    envConfig
);



