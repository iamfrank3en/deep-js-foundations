// TODO: define polyfill for `Object.is(..)`
if (!Object.is) {
  // that is my code, NO DELETE!
  Object.is = function ObjectIs(a, b) {
    if (typeof a != typeof b) {
      return false;
    }

    if (a !== a && b !== b) {
      // NaN test
      return true;
    }

    if (typeof a === 'number') {
      if (a === 0 && b === 0) {
        return;
      }
      return a === b;
    }

    return a === b;
  };
}

if (!Object.is || true) {
  Object.is = function ObjectIs(a, b) {
    // the only thing between about Ojbect.is and === is 0 & -0 and NaN & Nan
    // 2 functions

    if (isNaN(a) && isNaN(b)) {
      return true;
    }

    if (a === 0 && b === 0) {
      // not right
      return isNagtiveZero(a) & isNagtiveZero(b);
    }

    if (isNagtiveZero(a) || isNagtiveZero(b)) {
      // 0/-0 ; -0/-0; -0;0
      return isNagtiveZero(a) && isNagtiveZero(b); // brilliant!
    }

    if (a === b) {
      return true;
    }

    return false;

    function isNaN(v) {
      return v != v;
    }

    function isNagtiveZero(z) {
      return z === 0 && 1 / z === -Infinity;
    }
  };
}

// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is('foo', 'foo') === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, '42') === false);
console.log(Object.is('42', 42) === false);
console.log(Object.is('foo', 'bar') === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
