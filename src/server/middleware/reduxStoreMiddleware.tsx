import Store from "state/redux/reduxStore";


export default (req, res, next) => {
    //  create a new redux store
    const { store, sagaPromise } = Store();

    req.store = store;
    req.sagaPromise = sagaPromise;
    // console.log("PROMISE")
    // console.log(sagaPromise)

    return next();
};

