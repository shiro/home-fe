import AppRouter from "components/React/ServerAppRouter";
import { NextFunction, Response } from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { matchRoutes } from "react-router-config";
import { END } from "redux-saga";


import routes from "routes/routes";
import { IRequest, IStaticContext } from "server/serverTypes";


export default async (req: IRequest, res: Response, next: NextFunction) => {
    const { store, sagaPromise } = req;

    if (!store)
        return next();

    //  filter all componends that need rendering and check for initialProps
    const pageComponentRoutes = matchRoutes(routes, req.url);

    // get data for each component where necessary
    const promises = pageComponentRoutes.map(({ route }) => {
        try {
            // eslint-disable-next-line
            return route.component.fetchData(store);
        } catch (e) {
            return Promise.resolve(undefined);
        }
    });

    // stop all waiting sagas
    store.dispatch(END);

    //  hydrate async data before rendering
    try {
        // wait for all components and running sagas
        await Promise.all([...promises, sagaPromise.done]);

        //  static component context
        const context : IStaticContext = { req, res };
        const components = renderToString(<AppRouter context={context} store={store} location={req.url}/>);

        req.pageContent = components;
    } catch (err) {
        console.error("Error: Unable to fulfill server-side page render request");
        console.error(err);

        next(err);
    }

    return next();
};
