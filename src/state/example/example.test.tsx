import { expect } from "chai";
import configureStore from "redux-mock-store";

import { exampleActionCreators, exampleActions } from "state/example/exampleActions";
import { initialState } from "state/example/exampleReducers";


const mockStore = configureStore();

describe("example", () => {
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it("updates message", () => {
        const testString = "Rabbits are cute";

        store.dispatch(exampleActionCreators.editMessage(testString));
        const actions = store.getActions();

        const expectedActions = [{
            message: testString,
            type: exampleActions.EDIT_MESSAGE,
        }];

        expect(actions).to.deep.equal(expectedActions);
    });
});
