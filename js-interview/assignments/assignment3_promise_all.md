# Assignment 3 — Promise.all

References and reading:

- MDN Promise.all: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
- Promises guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

Hints:
- Accept an iterable, convert to an array for indexing.
- Use Promise.resolve on each item and collect results preserving order.
- Reject immediately if any promise rejects.
