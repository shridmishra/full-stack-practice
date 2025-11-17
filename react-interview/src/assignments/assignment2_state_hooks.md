# Assignment 2 — State, Reducer & Forms

This assignment covers state management patterns.

Topics covered:
- useState for local component state
- useReducer for complex state transitions
- controlled vs uncontrolled components
- lifting state up

References:

- useState: https://reactjs.org/docs/hooks-state.html
- useReducer: https://reactjs.org/docs/hooks-reference.html#usereducer
- Forms and controlled components: https://reactjs.org/docs/forms.html

Tasks (implement in `src/assignments/assignment2_state_hooks.jsx`):
1. Counter — useState-based counter with + and - buttons.
2. TodoReducer — small todo list implemented with useReducer.
3. ControlledForm — a simple controlled form (name + email) with validation and submit handler.

Notes/hints:
- For forms, keep inputs controlled (value + onChange) and handle submit.
- Use useReducer for update patterns where multiple fields or actions exist (add/remove/toggle).
