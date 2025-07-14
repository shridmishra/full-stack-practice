import React, { useState, useCallback, memo } from "react";


const Child = memo(({ onClick }) => {
  console.log("🔁 Child rendered");
  return <button onClick={onClick}>Add</button>;
});


export const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

 
  const handleAdd = useCallback(() => {
    setCount((prev) => prev + 1);
    console.log("clicked");
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>Count: {count}</p>
      <Child onClick={handleAdd} />
    </div>
  );
};
