import { configureStore, combineReducers } from "@reduxjs/toolkit";
import addToPersonalReducer from "../reducers/addToPersonalReducer";
import addToPostsReducer from "../reducers/addToPostsReducer";
import addToProfileReducer from "../reducers/addToProfileReducer";
const mainReducer = combineReducers({
  personal: addToPersonalReducer,
  profile: addToProfileReducer,
  posts: addToPostsReducer
});
export const store = configureStore({ reducer: mainReducer });
