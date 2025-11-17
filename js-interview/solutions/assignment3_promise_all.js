/**
 * Solution — Promise.all reimplementation
 */

function myPromiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const items = Array.from(iterable);
    const results = [];
    if (items.length === 0) return resolve([]);
    let resolvedCount = 0;

    items.forEach((item, i) => {
      Promise.resolve(item)
        .then((value) => {
          results[i] = value;
          resolvedCount += 1;
          if (resolvedCount === items.length) resolve(results);
        })
        .catch((err) => reject(err));
    });
  });
}

module.exports = { myPromiseAll };
