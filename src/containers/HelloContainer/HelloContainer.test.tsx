import { expect } from "chai";
import { mount, shallow } from "enzyme";
import React from "react";
import configureStore, { MockStore } from "redux-mock-store";

import HelloContainer from "containers/HelloContainer/HelloContainer";
import { IRootState } from "state/redux/rootReducer";


const mockStore = configureStore<IRootState>();

describe("HelloWorld", () => {
    let store: MockStore<IRootState>;
    let shallowWrapper;

    const initialState: IRootState = {
        example: { message: "hello rabbit" },
    };

    beforeEach(() => {
        store = mockStore(initialState);
        shallowWrapper = shallow(<HelloContainer store={store}/>);
        mount(<HelloContainer store={store}/>);
    });

    // afterEach(() => {
    //
    // });

    it("renders the component", () => {
        expect(shallowWrapper.length).to.equal(1);
    });

    it("holds the message from the intial state in props", () => {
        expect(shallowWrapper.props().message).to.equal("hello rabbit");
    });

    it("updates to new message after 1000ms", (done) => {
        setTimeout(() => {
            expect(store.getActions().length).to.equal(2);
            expect(store.getActions()[0].type).to.equal("EDIT_MESSAGE");
            done();
        }, 1001);
    });
});
