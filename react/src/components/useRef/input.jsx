import React, { useState, useRef } from "react";

export const CounterWithPrevious = () => {
  const [count, setCount] = useState(0);
  const previousCount = useRef(null);

  const handleIncrement = () => {
    previousCount.current = count;
    setCount(count + 1);
  };

  return (
    <div style={{ color: "white", textAlign: "center" }}>
      <p>Current: {count}</p>
      <p>Previous: {previousCount.current}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
