import { createStore } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import moment from "moment";

console.log(moment().hour());

const reducer = (
  state = { daytime: moment().hour() < 16 ? true : false },
  action
) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "SET_DAYTIME":
      return { ...state, daytime: action.payload };
    default:
      return state;
  }
};

// create a makeStore function
const makeStore = (context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
