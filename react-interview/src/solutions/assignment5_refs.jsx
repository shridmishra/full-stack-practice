import React, { useRef, useMemo, useState } from 'react';

// 1. FocusInput — useRef for DOM access
export default function FocusInput() {
  const inputRef = useRef(null);
  return (
    <div>
      <input ref={inputRef} placeholder="Type here" />
      <button onClick={() => inputRef.current && inputRef.current.focus()}>Focus</button>
    </div>
  );
}

// 2. MemoizedList — React.memo to prevent unnecessary re-renders
const ListItem = React.memo(({ item }) => {
  console.log('Rendering item:', item);
  return <li>{item}</li>;
});

export function MemoizedList({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <ListItem key={i} item={item} />
      ))}
    </ul>
  );
}

// 3. ExpensiveComputation — useMemo for expensive calculation
export function ExpensiveComputation({ number }) {
  const [toggle, setToggle] = useState(false);
  const expensiveResult = useMemo(() => {
    console.log('Computing expensive result...');
    let result = 0;
    for (let i = 0; i < number * 1000000; i++) result += i;
    return result;
  }, [number]);

  return (
    <div>
      <div>Result: {expensiveResult}</div>
      <button onClick={() => setToggle((t) => !t)}>Toggle (no recompute): {String(toggle)}</button>
    </div>
  );
}

// 4. ForwardRef example (bonus)
export const FancyInput = React.forwardRef((props, ref) => (
  <input ref={ref} style={{ border: '2px solid blue', padding: 4 }} {...props} />
));

