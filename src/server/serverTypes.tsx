import * as express from "express";
import * as redux from "redux";


export interface IRequest extends express.Request {
    pageContent?: string;
    sagaPromise?: any;
    store?: redux.Store;
}

export interface IStaticContext {
    req : IRequest;
    res : express.Response;
}
