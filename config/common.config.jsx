import objectAssignDeep from "object-assign-deep";


const prod = {};

const dev = {};

const isProduction = process.env.NODE_ENV === "production";

const envConfig = isProduction ? prod : dev;

export default objectAssignDeep(
    {
        isProduction,
        branch: process.env.BRANCH,
    },
    envConfig
);

