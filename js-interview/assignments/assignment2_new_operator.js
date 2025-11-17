/**
 * Assignment 2 — Reimplement `new` operator
 *
 * Implement `myNew(Constructor, ...args)` which emulates `new Constructor(...args)`:
 * - creates a new object whose prototype is `Constructor.prototype`
 * - calls the constructor with the provided arguments with `this` bound to the new object
 * - returns the constructed object unless the constructor returns an object
 */

// Assignment 2 — Reimplement `new` operator
// TODO: implement `myNew(Constructor, ...args)` that behaves like `new`.
// See `assignment2_new_operator.md` for references.

function myNew(/* Constructor, ...args */) {
  throw new Error('Not implemented');
}

module.exports = { myNew };
