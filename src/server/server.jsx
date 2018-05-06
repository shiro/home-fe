import http from "http";
import serverApp from "server/serverApp";


const server = http.createServer(serverApp);

let currentApp = serverApp;
server.listen(80);
console.log("server started");

if(module.hot){
    console.log("hot reloading is enabled");
    
    module.hot.accept("server/serverApp", () =>{
        console.log("hot reloaded server");
        
        server.removeListener("request", currentApp);
        server.on("request", serverApp);
        currentApp = serverApp;
    });
}
