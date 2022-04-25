import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodoRequest, deleteTodoRequest, getTodoRequest } from "../Redux/Todo/action";

export const Home = () => {
  const {todo_list} = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  useEffect(() => {
    dispatch(getTodoRequest());
  }, [])

  const handleSubmit = () => {
    dispatch(addTodoRequest(title));

  }

  if(!todo_list){
    return <div>Loading</div>
  }

  return (
    <div>
      <h2>Home</h2>
      <br /><br />
      <input type="text" placeholder="Enter Title of Todo Task" onChange={(e) => setTitle(e.target.value)}/><br /><br />
      <button disabled={!title} onClick={handleSubmit}>Submit</button>
      <br /><br />
      {todo_list.map((e, id) => {
        return <div key={id}>
          <span>{e.todo}</span><button onClick={() => {
            const id = e.id;
            dispatch(deleteTodoRequest(id));
          }}>Delete</button>
        </div>
      })}
    </div>
  )
}