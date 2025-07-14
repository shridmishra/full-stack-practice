import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoInput = () => {
  const [text, setText] = useState("");

  const { dispatch } = useContext(TodoContext);

  function handleAdd() {
    dispatch({
      type: "ADD",
      text: text,
    });
    setText("");
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />

      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default TodoInput;
