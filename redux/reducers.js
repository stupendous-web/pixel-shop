import moment from "moment";

const initialState = {
  daytime: moment().hour() >= 16,
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
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
