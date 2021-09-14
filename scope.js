"use strict";
/*
var is function scope.
let and const are block scope.

Function scope is within the function.
Block scope is within curly brackets.
*/

const setWidth = function () {
  var width = 100;
  console.log(width);
};
// console.log(width); -----> width is not defined

var age = 100;
if (age >= 12) {
  var dogYears = age * 7;
  console.log(`You are ${dogYears} dog years old`);
}
console.log(dogYears); // ------> 700

var age = 100;
if (age >= 12) {
  let dogYears2 = age * 7;
  console.log(`You are ${dogYears} dog years old`);
  console.log(dogYears2); // -----> 700
}
console.log(dogYears2); // -----> dogYear2 is not defined
