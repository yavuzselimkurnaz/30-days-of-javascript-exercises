// Following this is a list of datatypes.js

// 5- Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

console.log(typeof 30);
console.log(typeof 'Days of JavaScript');
console.log(typeof null);
console.log(typeof undefined);

// 6 - Declare four variables without assigning values
let name, surname, age, nation;

// 7- Declare four variables with assigned values
name = 'John';
surname = 'Doe';
age = 99;
nation = 'Papua New Guinea';

console.log(name, surname, age, nation);

// 8- Declare variables to store your first name, last name, marital status, country and age in multiple lines

const firstName = 'Jane';
const lastName = 'Doe';
const maritalStatus = 'married';
const country = 'Papua New Guinea';

// 9- Declare variables to store your first name, last name, marital status, country and age in a single line

const firstNameSingleLine = 'Jane',
  lastNameSingleLine = 'Doe',
  maritalStatusSingleLine = 'married',
  countrySingleLine = 'Papua New Guinea';

console.log(
  'Declare multiple line: ',
  firstName,
  lastName,
  maritalStatus,
  country
);

console.log(
  'Declare single line: ',
  firstNameSingleLine,
  lastNameSingleLine,
  maritalStatusSingleLine,
  countrySingleLine
);

// 10 - Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

const myAge = '31';
const yourAge = '32';

console.log(`I'm ${myAge} years old`);
console.log(`You're ${yourAge} years old`);
