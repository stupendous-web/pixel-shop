import moment from "moment";

console.log(moment().hour());

const initialState = {
  daytime: moment().hour() < 16 ? true : false,
};

console.log(initialState.daytime);

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case "SET_DAYTIME": {
      console.log(action.payload);
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
