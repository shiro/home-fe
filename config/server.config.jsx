import objectAssignDeep from "object-assign-deep";

import commonConfig from "./common.config";
import { webpackPaths, webpackFiles } from "./webpack.config";


const prod = {
    serverPort: 80,
};

const dev = {
    serverPort: 48525,
};

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
