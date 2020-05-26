const initState = [];

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case "SET_USER":
      return [...action.payload];
    case "PUSH_USER":
      return [...state, action.payload];
    default:
      return initState;
  }
}
