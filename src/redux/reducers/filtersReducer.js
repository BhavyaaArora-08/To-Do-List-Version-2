const defaultState = "all";

export default (state = defaultState, action) => {
  console.log(state);
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
};
