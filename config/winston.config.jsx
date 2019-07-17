import path from "path";

import objectAssignDeep from "object-assign-deep";
import winston from "winston";

import commonConfig from "./common.config";


const prod = {};

const dev = {};

const envConfig = commonConfig.isProduction ? prod : dev;


export default objectAssignDeep(
    {
        file: {
            level: "info",
            filename: path.resolve(commonConfig.path.root, "/logs/server.log"),
            handleExceptions: true,
            json: true,
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            colorize: false,
        },
        console: {
            level: "debug",
            handleExceptions: true,
            json: false,
            colorize: true,
        },
    },
    envConfig,
);