import objectAssignDeep from "object-assign-deep";

import commonConfig from "config/common.config";


const prod = {};

const dev = {};

const envConfig = commonConfig.isProduction ? prod : dev;


export default objectAssignDeep(
    {},
    commonConfig,
    envConfig,
);

