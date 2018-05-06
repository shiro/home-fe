import http from "http";
import app from "server/app";


const server = http.createServer(app);

let currentApp = app;
server.listen(80);
console.log("server started");

if(module.hot){
    console.log("hot reloading is enabled");
    
    module.hot.accept("server/app", () =>{
        console.log("hot reloaded server");
        
        server.removeListener("request", currentApp);
        server.on("request", app);
        currentApp = app;
    });
}
