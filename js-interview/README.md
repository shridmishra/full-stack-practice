# JS Interview Assignments

This folder contains 5 JavaScript interview assignments covering common JS concepts: closures, the `new` operator / prototype behavior, Promises, array higher-order functions, and deep cloning.

How to run

1. From the repository root run:

```bash
cd js-interview
npm test
```

This runs a small test runner `tests/runTests.js` that checks the implementations.

Files
- `assignments/assignment1_closure.js` - closure & state
- `assignments/assignment2_new_operator.js` - reimplement `new`
- `assignments/assignment3_promise_all.js` - reimplement `Promise.all`
- `assignments/assignment4_group_by.js` - higher-order/array method (groupBy)
- `assignments/assignment5_deep_clone.js` - deep cloning (handles arrays, objects, Map, Set, Date, RegExp, circular refs)
- `tests/runTests.js` - simple test runner using Node's `assert`

Notes
- These assignment files include implementations so the tests pass. You can turn each implementation into a stub for practice by replacing the body with a TODO before attempting them yourself.
