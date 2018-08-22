import { expect } from "chai";
import { shallow } from "enzyme";
import React from "react";
import configureStore, { MockStore } from "redux-mock-store";

import HelloContainer from "containers/HelloContainer/HelloContainer";
import { getMessage } from "state/example/exampleSelectors";
import { IRootState, rootIntialState } from "state/redux/rootReducer";


const mockStore = configureStore<IRootState>();

describe("HelloWorld", () => {
    let store: MockStore<IRootState>;
    let shallowWrapper;

    beforeEach(() => {
        store = mockStore(rootIntialState);

        shallowWrapper = shallow(
            <HelloContainer store={store}/>,
        ).dive();
    });

    it("renders the component", () => {
        expect(shallowWrapper.length).to.equal(1);
    });

    it("holds the message from the intial state in props", () => {
        const expectedMessage = getMessage(rootIntialState);

        const message = shallowWrapper.props().message;

        expect(message).to.equal(expectedMessage);
    });

    it("updates to new message after 1000ms", (done) => {
        setTimeout(() => {
            expect(store.getActions().length).to.equal(2);
            expect(store.getActions()[0].type).to.equal("EDIT_MESSAGE");
            done();
        }, 1001);
    });
});
