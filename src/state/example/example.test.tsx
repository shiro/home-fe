import { expect } from "chai";
import configureStore from "redux-mock-store";
import { getType } from "typesafe-actions";

import { exampleActions } from "state/example/exampleActions";
import { exampleInitialState } from "state/example/exampleReducer";
import * as exampleSelectors from "state/example/exampleSelectors";
import { Store } from "state/redux/reduxStore";


const MockStore = configureStore();

describe("example reducer", () => {
    let mockStore;
    let store;

    beforeEach(() => {
        mockStore = MockStore({});
        store = Store().store;
    });

    it("gets the inital message", () => {
        const expectedMessage = exampleInitialState.message;
        const message = exampleSelectors.getMessage(store.getState());

        expect(expectedMessage).equals(message);
    });

    it("updates message", () => {
        const testMessage = "Rabbits are cute";
        const testAction = exampleActions.editMessage(testMessage);

        mockStore.dispatch(testAction);

        const actions = mockStore.getActions();
        const expectedActions = [{
            message: testMessage,
            type: getType(exampleActions.editMessage),
        }];

        expect(actions).to.deep.equal(expectedActions);

        store.dispatch(testAction);

        expect(exampleSelectors.getMessage(store.getState())).to.equal(testMessage);
    });
});
