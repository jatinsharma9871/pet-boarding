import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { todoReducer } from "./Todo/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  todos: todoReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
