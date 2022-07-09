import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import reducers from "./reducers";

/*
const makeStore = (context) => createStore(reducers);

export const wrapper = createWrapper(makeStore, { debug: true });

 */

export const store = createStore(reducers);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
