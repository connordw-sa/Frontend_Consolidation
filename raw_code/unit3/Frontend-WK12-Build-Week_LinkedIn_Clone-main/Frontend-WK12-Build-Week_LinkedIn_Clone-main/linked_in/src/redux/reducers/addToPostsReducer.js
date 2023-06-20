import { ADD_TO_POSTS } from "../actions";

const initialState = { posts: {} };

const addToPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_POSTS:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};

export default addToPostsReducer;
