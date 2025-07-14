import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div>
      {state.map((todo) => (
        <div key={todo.id}>
          <span
            onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch({ type: "DELETE", id: todo.id })}>🗑</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
