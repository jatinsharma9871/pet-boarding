import { ADD_TODO, TODO_LOADING, TODO_ERROR } from "./action";

const initState = {
  todo_list: [],
  loading: false,
  error: false,
};

export const todoReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...store, todo_list: payload };

    case TODO_LOADING:
      return { ...store, loading: true };

    case TODO_ERROR:
      return { ...store, error: true };

    default:
      return store;
  }
};
