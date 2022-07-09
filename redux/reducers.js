import { HYDRATE } from "next-redux-wrapper";
import moment from "moment";

console.log(moment().hour());

const initialState = {
  daytime: moment().hour() < 16 ? true : false,
};

console.log(initialState.daytime);

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "SET_DAYTIME": {
      return {
        ...state,
        daytime: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
