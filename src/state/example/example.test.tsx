import {expect} from "chai";
import configureStore from "redux-mock-store";

import * as exampleActions from "state/example/exampleActions";
import {initialState} from "state/example/exampleReducers";


const mockStore = configureStore();

describe("example", () => {
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it("updates message", () => {
        const testString = "Rabbits are cute";

        store.dispatch(exampleActions.editMessage(testString));
        const actions = store.getActions();

        const expectedActions = [{
            message: testString,
            type: exampleActions.exampleActions.EDIT_MESSAGE,
        }];

        expect(actions).to.deep.equal(expectedActions);
    });
});
