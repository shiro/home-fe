import objectAssignDeep from "object-assign-deep";

import commonConfig from "config/common.config";
import { webpackPaths, webpackFiles } from "config/webpack.config";


const prod = {};

const dev = {};

const envConfig = commonConfig.isProduction ? prod : dev;


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
    commonConfig,
    envConfig,
);



