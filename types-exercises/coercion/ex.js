// // TODO: write the validation functions

// const isValidName = (name) => {
//   if (typeof name != "string") {
//     return false;
//   }
//   if (!name) {
//     return false;
//   }
//   if (name.replaceAll(" ", "").length < 3) {
//     return false;
//   }
//   return true;
// };

// const numberorstring = (v) => {
//   return typeof v === "string" || typeof v === "number";
// };

// const isWhole = (v) => Number.parseInt(v) == v;

// const isNaN = (v) => Object.is(Number(v), NaN);

// const notNatural = (v) => Number(v) < 0;

// const hoursAttended = (x, y) => {
//   if (!numberorstring(x) || !numberorstring(y)) {
//     return false;
//   }
//   if (isNaN(x) || isNaN(y)) {
//     return false;
//   }

//   if (notNatural(x) || notNatural(y)) {
//     return false;
//   }

//   if (!isWhole(x) || !isWhole(y)) {
//     return false;
//   }

//   if (x > y) {
//     return false;
//   }
//   return;
// };

// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, "10") === true);
console.log(hoursAttended("6", 10) === true);
console.log(hoursAttended("6", "10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("", 6) === false);
console.log(hoursAttended(6, "") === false);
console.log(hoursAttended("", "") === false);
console.log(hoursAttended("foo", 6) === false);
console.log(hoursAttended(6, "foo") === false);
console.log(hoursAttended("foo", "bar") === false);
console.log(hoursAttended(null, null) === false);
console.log(hoursAttended(null, undefined) === false);
console.log(hoursAttended(undefined, null) === false);
console.log(hoursAttended(undefined, undefined) === false);
console.log(hoursAttended(false, false) === false);
console.log(hoursAttended(false, true) === false);
console.log(hoursAttended(true, false) === false);
console.log(hoursAttended(true, true) === false);
console.log(hoursAttended(10, 6) === false);
console.log(hoursAttended(10, "6") === false);
console.log(hoursAttended("10", 6) === false);
console.log(hoursAttended("10", "6") === false);
console.log(hoursAttended(6, 10.1) === false);
console.log(hoursAttended(6.1, 10) === false);
console.log(hoursAttended(6, "10.1") === false);
console.log(hoursAttended("6.1", 10) === false);
console.log(hoursAttended("6.1", "10.1") === false);
