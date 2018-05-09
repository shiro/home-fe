import { NextFunction, Response } from "express";

import { IRequest } from "server/serverTypes";
import Store from "state/redux/reduxStore";


export default (req: IRequest, res: Response, next: NextFunction) => {
    //  create a new redux store
    const { store, sagaPromise } = Store();

    req.store = store;
    req.sagaPromise = sagaPromise;

    next();
};
