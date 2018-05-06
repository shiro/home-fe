import Store from "state/redux/store";


export default function reduxStoreMiddleware (req, res, next){
    //  create a new redux store
    req.store = Store();
    
    return next();
}

