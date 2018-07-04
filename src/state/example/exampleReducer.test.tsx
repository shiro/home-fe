import { expect } from "chai";

import { exampleActions } from "state/example/exampleActions";
import { exampleInitialState } from "state/example/exampleReducer";
import * as exampleSelectors from "state/example/exampleSelectors";
import { Store } from "state/redux/reduxStore";


describe("example reducer", () => {
    let store;

    beforeEach(() => {
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

        store.dispatch(testAction);

        const storeMessage = exampleSelectors.getMessage(store.getState());

        expect(storeMessage).to.equal(testMessage);
    });
});
