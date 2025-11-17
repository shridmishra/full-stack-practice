const assert = require('assert');
const path = require('path');

const { makeCounter } = require(path.join('..', 'solutions', 'assignment1_closure'));
const { myNew } = require(path.join('..', 'solutions', 'assignment2_new_operator'));
const { myPromiseAll } = require(path.join('..', 'solutions', 'assignment3_promise_all'));
const { groupBy } = require(path.join('..', 'solutions', 'assignment4_group_by'));
const { deepClone } = require(path.join('..', 'solutions', 'assignment5_deep_clone'));

function testClosure() {
  const a = makeCounter(1);
  const b = makeCounter(10);
  assert.strictEqual(a.value(), 1);
  assert.strictEqual(a.increment(), 2);
  assert.strictEqual(a.decrement(), 1);
  assert.strictEqual(b.increment(), 11);
  // ensure independent
  assert.strictEqual(a.value(), 1);
}

function testMyNew() {
  function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function () {
    return `hi ${this.name}`;
  };

  const p = myNew(Person, 'Sam');
  assert.ok(p instanceof Person);
  assert.strictEqual(p.name, 'Sam');
  assert.strictEqual(typeof p.greet, 'function');
  assert.strictEqual(p.greet(), 'hi Sam');
}

async function testPromiseAll() {
  const delayed = (v, t) => new Promise((res) => setTimeout(() => res(v), t));
  const res = await myPromiseAll([delayed(1, 10), Promise.resolve(2), 3]);
  assert.deepStrictEqual(res, [1, 2, 3]);

  // rejection case
  let rejected = false;
  try {
    await myPromiseAll([Promise.resolve(1), Promise.reject(new Error('fail'))]);
  } catch (err) {
    rejected = true;
    assert.strictEqual(err.message, 'fail');
  }
  assert.ok(rejected, 'expected rejection');
}

function testGroupBy() {
  const arr = [6.1, 4.2, 6.3];
  const grouped = groupBy(arr, Math.floor);
  assert.deepStrictEqual(grouped['6'].length, 2);
  assert.deepStrictEqual(grouped['4'].length, 1);

  const people = [{ age: 23 }, { age: 23 }, { age: 25 }];
  const g2 = groupBy(people, 'age');
  assert.strictEqual(Object.keys(g2).length, 2);
}

function testDeepClone() {
  const obj = { a: 1, b: { c: 2 }, d: new Date(0), e: /ab/i };
  obj.self = obj;
  obj.map = new Map([[{ k: 1 }, 'v']]);
  obj.set = new Set([1, 2, 3]);
  const cloned = deepClone(obj);
  assert.notStrictEqual(cloned, obj);
  assert.strictEqual(cloned.a, 1);
  assert.strictEqual(cloned.b.c, 2);
  assert.strictEqual(cloned.d.getTime(), obj.d.getTime());
  assert.strictEqual(cloned.e.source, obj.e.source);
  // circular preserved (different object but references mapped)
  assert.notStrictEqual(cloned.self, obj);
  assert.strictEqual(cloned.self, cloned);
  // Map and Set exist
  assert.ok(cloned.map instanceof Map);
  assert.ok(cloned.set instanceof Set);
}

async function run() {
  console.log('Running js-interview tests...');
  try {
    testClosure();
    console.log('✓ closure tests passed');
    testMyNew();
    console.log('✓ myNew tests passed');
    await testPromiseAll();
    console.log('✓ promiseAll tests passed');
    testGroupBy();
    console.log('✓ groupBy tests passed');
    testDeepClone();
    console.log('✓ deepClone tests passed');
    console.log('\nAll tests passed ✅');
    process.exit(0);
  } catch (err) {
    console.error('\nTest failed: ', err && err.stack ? err.stack : err);
    process.exit(1);
  }
}

run();
