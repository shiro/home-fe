import { IRootState } from "state/redux/rootReducer";


export const getMessage = (state: IRootState) => state.example.message;
