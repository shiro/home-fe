import * as express from "express";
import { StaticContext } from "react-router";
import { RouteConfig } from "react-router-config";
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

declare module "react" {
    // interface Component<P = {}, S = {}, SS = any> extends ComponentLifecycle<P, S, SS> {
    //     fetchData?(store: redux.Store<IRootState>): any;
    // }

    interface ComponentClass<P = {}> extends React.StaticLifecycle<P, any> {
        fetchData?(store: redux.Store<IRootState>): any;
    }

    interface StatelessComponent<P = {}> {
        fetchData?(store: redux.Store<IRootState>): any;
    }

    interface Component<P, S> {
        fetchData?(store: redux.Store<IRootState>): any;
    }

}

// react.Component.prototype.fetchData = (store: redux.Store<IRootState>): any;

declare module "react-router" {
    export interface RouteComponentProps<P, C extends StaticContext = StaticContext> {
        route?: RouteConfig;
    }
}

// allow components to have a store prop
declare global {
    namespace JSX {
        export interface IntrinsicAttributes {
            store?: redux.Store;
        }
    }
}

