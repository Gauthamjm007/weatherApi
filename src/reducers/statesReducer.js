import statesData from "./data/statesLocation.json";

const initState = statesData;

export default function userReducer(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
