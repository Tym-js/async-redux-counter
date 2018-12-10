import { INCREMENT, DECREMENT } from "../actions";

const initialState = {
  value: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + 1
      };
    case DECREMENT:
      if (state.value === 0) {
        return state;
      }
      return {
        value: state.value - 1
      };
    default:
      return state;
  }
};
