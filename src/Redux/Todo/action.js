import axios from "axios";

export const ADD_TODO = "ADD_TODO";
export const TODO_LOADING = "TODO_LOADING";
export const TODO_ERROR = "TODO_ERROR";

export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const loadingTodo = () => ({ type: TODO_LOADING });
export const errorTodo = () => ({ type: ERROR_LOADING });

export const addTodoRequest = (title) => async (dispatch) => {
  dispatch(loadingTodo());
  const todo = {
    todo: title,
    completed: false,
  };
  await fetch("http://localhost:8080/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  })
    .then(() => {
      alert("Task added in todo list.");
      dispatch(getTodoRequest());
    })
    .catch((err) => {
      dispatch(errorTodo(err));
      console.log(err);
    });
};

export const getTodoRequest = () => async (dispatch) => {
  dispatch(loadingTodo());
  try {
    let res = await fetch("http://localhost:8080/todo");
    let data = await res.json();
    dispatch(addTodo(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodoRequest = (id) => async (dispatch) => {
  dispatch(loadingTodo());
  await fetch(`http://localhost:8080/todo/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => {
      dispatch(getTodoRequest());
      alert("Task Deleted");
    })
    .catch((err) => {
      dispatch(errorTodo(err));
      console.log(err);
    });
};
