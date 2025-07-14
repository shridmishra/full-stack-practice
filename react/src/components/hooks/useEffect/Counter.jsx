import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1 );
  }

  function decrement() {
    if (count >= 1) {
      setCount(count - 1);
    }
  }
  return (
    <div>
      <div>count:{count}</div>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>increment</button>
      <button onClick={decrement} disabled={count === 0}>
        Decrement
      </button>
    </div>
  );
};
