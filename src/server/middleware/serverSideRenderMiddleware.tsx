import AppRouter from "components/React/ServerAppRouter";
import { NextFunction, Response } from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { END } from "redux-saga";


import { IRequest, IStaticContext } from "server/serverTypes";


export default async (req: IRequest, res: Response, next: NextFunction) => {
    const { store, sagaPromise } = req;

    if (!store) {
        next();

        return;
    }

    // stop all waiting sagas
    store.dispatch(END);

    //  hydrate async data before rendering
    try {
        // wait for all components and running sagas
        await Promise.all([sagaPromise.done]);

        //  static component context
        const context: IStaticContext = { req, res };
        req.pageContent = ReactDOMServer.renderToString(<AppRouter context={context} store={store} location={req.url}/>);
    } catch (err) {
        console.error("Error: Unable to fulfill server-side page render request");
        console.error(err);

        next(err);

        return;
    }

    next();
};
