"use strict";

const setWidth = function () {
  var width = 100;
  console.log(width);
};
// console.log(width);

var age = 100;
if (age >= 12) {
  var dogYears = age * 7;
  console.log(`You are ${dogYears} dog years old`);
}
console.log(dogYears);

var age = 100;
if (age >= 12) {
  let dogYears2 = age * 7;
  console.log(`You are ${dogYears} dog years old`);
  console.log(dogYears2);
}
console.log(dogYears2);
