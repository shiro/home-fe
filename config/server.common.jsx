import { webpackPaths, webpackFiles } from "config/webpack";


export default {
    path: {
        root: webpackPaths.appRoot,
        dist: webpackPaths.serverDest,
        assets: webpackPaths.clientDest,
    },
    files: {
        htmlTemplate: webpackFiles.htmlTemplateDest,
    },
};