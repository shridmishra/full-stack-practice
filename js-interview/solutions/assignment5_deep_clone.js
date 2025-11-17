/**
 * Solution — deepClone
 */

function deepClone(value, seen = new WeakMap()) {
  if (value === null || typeof value !== 'object') return value;
  if (seen.has(value)) return seen.get(value);

  if (value instanceof Date) return new Date(value.getTime());
  if (value instanceof RegExp) return new RegExp(value.source, value.flags);
  if (value instanceof Map) {
    const m = new Map();
    seen.set(value, m);
    for (const [k, v] of value.entries()) {
      m.set(deepClone(k, seen), deepClone(v, seen));
    }
    return m;
  }
  if (value instanceof Set) {
    const s = new Set();
    seen.set(value, s);
    for (const v of value.values()) s.add(deepClone(v, seen));
    return s;
  }

  const out = Array.isArray(value) ? [] : {};
  seen.set(value, out);
  for (const key of Object.keys(value)) {
    out[key] = deepClone(value[key], seen);
  }
  return out;
}

module.exports = { deepClone };
