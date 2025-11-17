/**
 * Assignment 1 — Components & JSX basics
 *
 * TODO: Implement a functional component `Greeting` that accepts `props.name`
 * and renders a greeting message. Export the component as default.
 */

/**
 * Implement the following components:
 *
 * - Greeting({ name }) -> <h2>Hello, {name}!</h2>
 * - Card({ title, children }) -> basic container that renders title and children
 * - Layout() -> composes Greeting and Card to demonstrate composition
 *
 * Export default should be one of the components (e.g. Greeting) so the test harness
 * can import it easily. Keep separate named exports if you prefer.
 */

export default function Greeting(/* { name } */) {
  throw new Error('Not implemented');
}

// Named component skeletons (implement in exercises)
export function Card(/* { title, children } */) {
  throw new Error('Not implemented');
}

export function Layout(/* no props */) {
  throw new Error('Not implemented');
}
