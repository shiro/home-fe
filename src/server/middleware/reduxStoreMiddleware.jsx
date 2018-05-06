import Store from "state/redux/reduxStore";


export default function reduxStoreMiddleware(req, res, next){
    //  create a new redux store
    req.store = Store();
    
    return next();
}

