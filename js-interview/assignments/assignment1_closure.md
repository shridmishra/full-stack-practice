# Assignment 1 — Closures & state

References and reading:

- MDN closures overview: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
- Functions and scope: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

Hints:
- Use a local variable captured by inner functions to keep state private.
- Return an object with methods that access/update that variable.

Example signature:

function makeCounter(initial = 0) {
  // returns { increment, decrement, value }
}
