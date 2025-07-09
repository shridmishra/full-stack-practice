import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count + 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

export const useReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return <div>
   <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>➕</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>➖</button>
      <button onClick={() => dispatch({ type: "RESET" })}>🔁</button>
    </div>
  </div>;
};
