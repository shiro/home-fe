import http from "http";

import serverApp from "server/app";


const httpServer = http.createServer(serverApp);

let currentServerApp = serverApp;
httpServer.listen(80);
console.log("httpServer is running");

if(module.hot){
    module.hot.accept("./app.jsx", () =>{
        console.log("hot reloaded server");
        
        httpServer.removeListener("request", currentServerApp);
        httpServer.on("request", serverApp);
        currentServerApp = serverApp;
    });
}
