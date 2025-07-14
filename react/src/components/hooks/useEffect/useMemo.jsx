import React, { useState, useMemo } from "react";

export const ExpensiveCalc = () => {
  const [num, setNum] = useState(1);

  const factorial = (n) => {
    console.log("Calculating factorial...");
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  const result = useMemo(() => factorial(num), [num]);

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <p>Factorial: {result}</p>
    </div>
  );
};
