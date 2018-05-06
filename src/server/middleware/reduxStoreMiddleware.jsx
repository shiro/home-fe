import Store from "state/redux/reduxStore";


export default function reduxStoreMiddleware(req, res, next){
    //  create a new redux store
    let { store, sagaPromise } = Store();
    
    req.store = store;
    req.sagaPromise = sagaPromise;
    // console.log("PROMISE")
    // console.log(sagaPromise)
    
    return next();
}

