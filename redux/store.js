import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import reducers from "./reducers";

export const store = createStore(reducers);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
