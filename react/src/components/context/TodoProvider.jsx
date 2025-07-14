import { useReducer } from "react";
import { reducer, TodoContext } from "./TodoContext";

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
