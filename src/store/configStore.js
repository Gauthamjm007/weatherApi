import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import usersReducer from "../reducers/usersReducer";
import coronaCasesReducer from "../reducers/coronaCasesReducer";
import weatherDataReducer from "../reducers/weatherDataReducer";
import statesReducer from "../reducers/statesReducer";
const configStore = () => {
  const store = createStore(
    combineReducers({
      users: usersReducer,
      coronaCases: coronaCasesReducer,
      weather: weatherDataReducer,
      states: statesReducer,
    }),
    applyMiddleware(thunk)
  );

  return store;
};

export default configStore;
