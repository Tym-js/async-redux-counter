export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = () => ({
  type: INCREMENT
});
export const decrement = () => ({
  type: DECREMENT
});
export const incrementAsync = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
};
export const decrementAsync = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(decrement());
    }, 1000);
  };
};
