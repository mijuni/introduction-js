/*  Excercise one: Variables
    01) log out your favorite music artist / band name and song */

const bandName = "DPR Ian ";
const favSong = "Beautiful";
const comma = ", ";
// const (bandName favSong);
console.log(bandName + comma + favSong);

// 02) Fix the following code snippets

/* let currentUsers;
currentUsers = 1;
currentUsers = 1;
currentUsers = 1;
console.log(currentUsers); 
Wrong result: Expected 3 not undefined
*/

let currentUsers = 0;
currentUsers += 1;
currentUsers += 1;
currentUsers += 1;
console.log(currentUsers);

/*
Coding Tasks Day 2
01) Logical Operators
*/

//01.1) Compare two conditions

console.log(25 / 5); // Result: 5
console.log(50 / 10); // Result: 5
console.log(25 / 5 === 50 / 10);
console.log(25 / 5 === 5 && 50 / 10 === 5); // mit logischen Operator gelöst

// 01.2) The opposite value

/*let isActive = !true;
console.log(isActive);*/

let isActive = true;
// isActive = !isActive; toggle an-und aus (Lichtschalter)
function toggle() {
  isActive = !isActive;
}

toggle(); // toggle ein-und aus, wechselt zwischen false und truth mit jedem toggle
console.log(isActive);

/* 02) Functions
02.1) Create a welcome function
*/

function welcome(greeting, userName) {
  if (greeting !== "" && userName !== "") {
    return greeting + " " + userName;
  } else {
    return "Hello Guest";
  }
}

console.log(welcome("Hey", ""));
console.log(welcome("Hey", "Max"));

/* 
Coding Task:
 Create two functions setFirstName, setLastName to set the first and last name to the fullName variable.
 Add a parameter on both, and check if the parameter exists and is a string.
 Check if the fullName is empty. If it's empty, create a console.log with a warning.
 Create one function getFullName that returns the fullName variable.
 Check if the fullName is empty.
 Ensure that setFirstName and setLastName was executed before.
 */

let fullName = "";

function setFirstName(firstName) {
  if (firstName !== undefined && typeof firstName === "string") {
    fullName += firstName;
  }
}

function setLastName(lastName) {
  if (lastName !== undefined && typeof lastName === "string") {
    fullName += lastName;
  }
}

function getFullName(fullName) {
  if (fullName === "") {
    return "Warning";
  } else {
    return fullName;
  }
}

setFirstName("Mi");
setLastName("Mai");
console.log(getFullName());
