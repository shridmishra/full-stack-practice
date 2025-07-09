import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE":
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

export const TodoReducer = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  function handleAdd() {
    if (input.trim()) {
      dispatch({ type: "ADD", text: input });
      setInput("");
    }
  }

  return (
    <div style={{ padding: "1rem" }}></div>
  );
};
