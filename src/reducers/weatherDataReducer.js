const initState = [];

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case "SET_WEATHER":
      return action.payload;
    case "GET_WEATHER":
      return action.payload;
    default:
      return state;
  }
}
