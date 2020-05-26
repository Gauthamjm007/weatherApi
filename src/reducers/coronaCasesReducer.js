import csvData from "./data/state_wise_data.json";
const initState = csvData;
export default function coronaCasesReducer(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
