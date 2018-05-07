import { expect } from "chai";
import { mount, shallow } from "enzyme";
import React from "react";
import configureStore from "redux-mock-store";

import ConnectedHelloWorld from "components/HelloWorld/HelloWorld";

const mockStore = configureStore();

describe("HelloWorld", () => {
    let store;
    let shallowWrapper;

    const initialState = {
        example: { message: "hello rabbit" },
    };

    beforeEach(() => {
        store = mockStore(initialState);
        shallowWrapper = shallow(<ConnectedHelloWorld store={store}/>);
        mount(<ConnectedHelloWorld store={store}/>);
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

    it("displays the message from the initial state", () => {
        expect(shallowWrapper.dive().find(".HelloWorld__msgBox").length).to.equal(1);
    });

    it("updates to new message after 1000ms", (done) => {
        setTimeout(() => {
            expect(store.getActions().length).to.equal(2);
            expect(store.getActions()[0].type).to.equal("EDIT_MESSAGE");
            done();
        }, 1001);
    });
});
