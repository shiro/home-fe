import * as express from "express";
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
    statusCode?: number;
}

// allow components to have a store prop
declare global {
    namespace JSX {
        export interface IntrinsicAttributes {
            store?: redux.Store;
        }
    }
}
