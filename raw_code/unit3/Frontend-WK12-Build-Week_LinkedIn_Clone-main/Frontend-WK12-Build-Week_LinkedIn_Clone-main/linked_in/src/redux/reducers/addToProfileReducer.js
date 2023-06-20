import { ADD_TO_PROFILE } from "../actions";

const initialState = { profile: {} };

const addToProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PROFILE:
      return { ...state, profile: action.payload };

    default:
      return state;
  }
};
export default addToProfileReducer;
