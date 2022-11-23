// Excercise one: Basis Operators with Strings

console.log("M" + "i " + "M" + "a" + "i");
// result: Mi Mai

// fix following code snippets

/*
console.log("2" + 2);
Wrong result: Expected a Number 2 recieved 22
*/
console.log(0 + 2);

/* 
console.log("test" == "TEST");
Wrong result: Output should be true. Make it work.
*/
console.log("TEST" === "TEST");

// Excercise two: Basic Operators with Numbers

console.log(((10 + 10) * 4) / 2 - 20);
// result: 20

/*
console.log(600 + 510 / 2);
Wrong result: Expected 555 not 855
*/

console.log((600 + 510) / 2);
// result: 555

/* 
console.log("333" == 333);
Wrong result: Expected false not true
*/

console.log("333" !== "333");
// false

/* 
console.log(50 + 2 > 52);
Wrong result: Expected true cause both values are greater than or equal
*/

console.log(50 + 2 >= 52);
// result: true

/* 
Excercise as a Team
Miro Board*/
// Taschenrechner
let result = 0;

function init(num) {
  result = num;
  print();
}

function add(num) {
  result += num;
  print();
}

function sub(num) {
  result -= num;
  print();
}

function multiply(num) {
  result *= num;
  print();
}

function divide(num) {
  result /= num;
  print();
}

function reset() {
  result = 0;
}

function print() {
  console.log(result);
}

print();
init(5);
add(5);
reset();

/* function add(a, b) {
  result = a + b;
  // console.log()
}

function sub(a, b) {
  result = a - b;
}

function multi(a, b) {
  result = a * b;
}

function divi(a, b) {
  result = a / b;
}

function reset() {
  result = 0;
}

function current() {
  console.log(result);
}

add(3, 5);
current();
reset();
current();
*/
