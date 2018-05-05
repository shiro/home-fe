import objectAssignDeep from "object-assign-deep";


let env = process.env.NODE_ENV === "production" ? "prod" : "dev";


export default objectAssignDeep(
    {},
    require("config/server.common").default,
    require(`config/server.${env}`).default,
);

