import React from "react";
import AppRouter from "components/React/ServerAppRouter";
import { matchRoutes } from "react-router-config";
import { renderToString } from "react-dom/server";
import { END } from "redux-saga";

import routes from "routes/routes";


export default async function serverSideRenderMiddleware(req, res, next){
    let { store, sagaPromise } = req;
    
    if(!store)
        return next();
    
    //  filter all componends that need rendering and check for initialProps
    const pageComponentRoutes = matchRoutes(routes, req.url);
    
    // get data for each component where necessary
    const promises = pageComponentRoutes.map(({ route }) =>{
        try{
            // eslint-disable-next-line
            return route?.component?.fetchData(store);
        }catch(e){
            return Promise.resolve(null);
        }
    });
    
    // stop all waiting sagas
    store.dispatch(END);
    
    //  hydrate async data before rendering
    try{
        // wait for all components and running sagas
        await Promise.all([...promises, sagaPromise.done]);
        
        //  static component context
        const context = { req, res };
        const components = renderToString(<AppRouter context={context} store={store} location={req.url}/>);
        
        req.pageContent = components;
    }catch(err){
        console.error("Error: Unable to fulfill server-side page render request");
        console.error(err);
        
        next(err);
    }
    
    return next();
}
