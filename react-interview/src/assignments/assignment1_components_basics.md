# Assignment 1 — Components, Props & Composition

This assignment covers foundational React topics around components and composition. Implement the small components described below and read the linked references.

Topics covered:
- JSX and function components
- Props, default props and children
- Component composition and slots
- Prop drilling vs composition

References:

- JSX: https://developer.mozilla.org/en-US/docs/Glossary/JSX
- Function components & props: https://reactjs.org/docs/components-and-props.html

Tasks (implement each in `src/assignments/assignment1_components_basics.jsx`):

1. Greeting — a simple component `Greeting({ name })` that renders `<h2>Hello, {name}!</h2>`.
2. Card — a presentational component that accepts `children` and an optional `title` prop.
3. Layout — a component that composes `Card` and `Greeting` to demonstrate composition and children.

Notes/hints:
- Use `props.children` to render nested content.
- Keep components small and focused; composition is preferred over prop drilling for layout.

