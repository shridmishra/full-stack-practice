/**
 * Solution — groupBy
 */

function groupBy(array, iteratee) {
  if (!Array.isArray(array)) throw new TypeError('First argument must be an array');
  const fn =
    typeof iteratee === 'function'
      ? iteratee
      : (item) => (item == null ? undefined : item[iteratee]);

  return array.reduce((acc, item) => {
    const key = fn(item);
    const k = String(key);
    if (!Object.prototype.hasOwnProperty.call(acc, k)) acc[k] = [];
    acc[k].push(item);
    return acc;
  }, {});
}

module.exports = { groupBy };
