# Assignment 4 — Context, Custom Hooks & Advanced Patterns

Topics covered:
- React Context API and useContext
- Creating reusable custom hooks that consume context
- Error boundaries and portals (conceptual)

References:

- Context: https://reactjs.org/docs/context.html
- useContext: https://reactjs.org/docs/hooks-reference.html#usecontext
- Error boundaries: https://reactjs.org/docs/error-boundaries.html

Tasks (implement in `src/assignments/assignment4_context.jsx`):
- ThemeContext & ThemeProvider exposing `theme` and `toggleTheme`.
- useTheme custom hook that returns context value and throws if used outside provider.
- Create a small consumer component that uses `useTheme` and toggles the theme.

Notes:
- Keep context minimal; prefer small context values rather than large objects to avoid unnecessary renders.
