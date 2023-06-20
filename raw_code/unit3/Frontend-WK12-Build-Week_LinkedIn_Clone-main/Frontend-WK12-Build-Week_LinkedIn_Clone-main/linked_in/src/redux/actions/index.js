export const ADD_TO_PERSONAL = "ADD_TO_PERSONAL";
export const ADD_TO_PROFILE = "ADD_TO_PROFILE";
export const ADD_TO_POSTS = "ADD_TO_POSTS";

export const addToProfile = (user) => ({
  type: ADD_TO_PROFILE,
  payload: user,
});

export const addToPersonal = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWVmNGM5NmRmYjAwMTUyMWE1YjciLCJpYXQiOjE2NzA4MzU5NjcsImV4cCI6MTY3MjA0NTU2N30.3nMkP_psg7qh50FtCZmYQ_t60p-DJ4_w3p68wGvypoc",
    },
  };

  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        options
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({ type: ADD_TO_PERSONAL, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToPosts = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWVmNGM5NmRmYjAwMTUyMWE1YjciLCJpYXQiOjE2NzA4MzU5NjcsImV4cCI6MTY3MjA0NTU2N30.3nMkP_psg7qh50FtCZmYQ_t60p-DJ4_w3p68wGvypoc",
    },
  };

  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        options
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({ type: ADD_TO_POSTS, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
