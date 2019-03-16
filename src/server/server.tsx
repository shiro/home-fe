import http from "http";
import serverApp from "server/serverApp";

import config from "config/server.config.jsx";


const server = http.createServer(serverApp);

let currentApp = serverApp;
server.listen(config.serverPort);
console.log(`server started on port ${config.serverPort}`);


if ((module as any).hot) {
    console.log("hot reloading is enabled");

    module.hot.accept("server/serverApp", () => {
        console.log("hot reloaded server");

        server.removeListener("request", currentApp);
        server.on("request", serverApp);
        currentApp = serverApp;
    });
}
