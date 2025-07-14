import { createContext } from "react";

export const TodoContext = createContext();

export function reducer(state, action) {
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
