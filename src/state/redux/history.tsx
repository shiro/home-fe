// provide correct history for the target
let History;

switch(process.env.TARGET) {
    case "client": {
        History = require("history").createBrowserHistory;
        break;
    }
    default: {
        History = require("history").createMemoryHistory;
    }
}

const history = History();


export default history;
