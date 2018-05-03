// provide correct history factory for the target
let History;

switch(process.env.TARGET){
    case "client":{
        History = require("history/createBrowserHistory").default;
        break;
    }
    default:{
        throw new Error("only client configuration is supported for now");
        // History = require('history/createMemoryHistory').default;
    }
}

let history = History();


export default history;
