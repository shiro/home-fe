import objectAssignDeep from "object-assign-deep";

import commonConfig from "./common.config";


const prod = {};

const dev = {
    webpackPort: 80,
};

const envConfig = commonConfig.isProduction ? prod : dev;


export default objectAssignDeep(
    {},
    commonConfig,
    envConfig,
);

