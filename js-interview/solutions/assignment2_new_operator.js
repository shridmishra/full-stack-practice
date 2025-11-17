/**
 * Solution — Reimplement `new` operator
 */

function myNew(Constructor, ...args) {
  if (typeof Constructor !== 'function') {
    throw new TypeError('Constructor must be a function');
  }
  const obj = Object.create(Constructor.prototype);
  const result = Constructor.apply(obj, args);
  if (result && (typeof result === 'object' || typeof result === 'function')) {
    return result;
  }
  return obj;
}

module.exports = { myNew };
