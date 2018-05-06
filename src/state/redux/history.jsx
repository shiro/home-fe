// provide correct history for the target
let History;

switch(process.env.TARGET){
    case "client":{
        History = require("history/createBrowserHistory").default;
        break;
    }
    default:{
        History = require("history/createMemoryHistory").default;
    }
}

let history = History();


export default history;
