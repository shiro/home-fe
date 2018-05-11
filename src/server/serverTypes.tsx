import * as express from "express";
import * as react from "react";
import * as redux from "redux";
import { IRootState } from "state/redux/rootReducer";


export interface IWindow extends Window {
    __INITIAL_STATE__?: IRootState | object;
}

export interface IRequest extends express.Request {
    pageContent?: string;
    sagaPromise?: any;
    store?: redux.Store;
}

export interface IStaticContext {
    req: IRequest;
    res: express.Response;
}

declare module "react" {
    interface ComponentClass<P = {}> extends react.StaticLifecycle<P, any> {
        fetchData?(store: redux.Store): any;
    }
    interface StatelessComponent<P = {}> {
        fetchData?(store: redux.Store): any;
    }
}
