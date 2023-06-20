import { ADD_TO_PERSONAL } from "../actions";

const initialState = { personal: {} };

const addToPersonalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PERSONAL:
      return { ...state, personal: action.payload };

    default:
      return state;
  }
};

export default addToPersonalReducer;
