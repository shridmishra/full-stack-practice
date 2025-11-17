/**
 * Solution — Closures & state
 */

function makeCounter(initial = 0) {
  let count = Number(initial) || 0;
  return {
    increment() {
      count += 1;
      return count;
    },
    decrement() {
      count -= 1;
      return count;
    },
    value() {
      return count;
    },
  };
}

module.exports = { makeCounter };
