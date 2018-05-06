import configureStore from "redux-mock-store";
import { expect } from "chai";

import { initialState } from "state/example/reducers";
import * as exampleActions from "state/example/actions";


const mockStore = configureStore();

describe("example", () =>{
    let store;

    beforeEach(() =>{
        store = mockStore(initialState);
    });

    it("updates message", () =>{
        const testString = "Rabbits are cute";

        store.dispatch(exampleActions.editMessage(testString));
        const actions = store.getActions();

        const expectedActions = [{
            type: exampleActions.actions.EDIT_MESSAGE,
            message: testString,
        }];

        expect(actions).to.deep.equal(expectedActions);
    });
});
