import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import todosReducer from "../reducers/todosReducer";
import filtersReducer from "../reducers/filtersReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      todos: todosReducer,
      filter: filtersReducer,
    }),
    composeEnhancers(applyMiddleware())
  );

  return store;
};
