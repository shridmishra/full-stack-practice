# Assignment 5 — deepClone

References and reading:

- Deep copy patterns: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Structured_clone
- Working with Map and Set: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
- Circular references: consider tracking seen objects with WeakMap

Hints:
- Use a WeakMap to track already-cloned objects and handle circular structures.
- Handle Date, RegExp, Map, Set specially; copy arrays and plain objects recursively.
