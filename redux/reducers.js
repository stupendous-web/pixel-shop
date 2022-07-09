import moment from "moment";

const initialState = {
  daytime: moment().hour() < 16 ? true : false,
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
