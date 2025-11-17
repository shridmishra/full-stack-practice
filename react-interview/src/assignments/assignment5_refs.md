# Assignment 5 — Refs, Performance & Optimization

Topics covered:
- useRef for DOM access and mutable instance variables
- forwardRef for forwarding refs to child components
- React.memo, useMemo, useCallback for performance
- Keys and list optimization

References:

- useRef: https://reactjs.org/docs/hooks-reference.html#useref
- forwardRef: https://reactjs.org/docs/react-api.html#reactforwardref
- React.memo: https://reactjs.org/docs/react-api.html#reactmemo
- Performance optimization: https://reactjs.org/docs/optimizing-performance.html

Tasks (implement in `src/assignments/assignment5_refs.jsx`):
- FocusInput — uses useRef to focus an input on button click
- MemoizedList — uses React.memo or useMemo to avoid unnecessary re-renders
- ExpensiveComputation — component that uses useMemo for an expensive calculation

Notes:
- Use useRef for storing values that persist across renders but don't trigger re-render when changed.
- React.memo prevents re-render unless props change (shallow comparison by default).

