import path from "path";


const appRoot = path.join(__dirname, "..");

export default {
    path: {
        root: appRoot,
        dist: path.join(appRoot, "dist.server"),
    },
};