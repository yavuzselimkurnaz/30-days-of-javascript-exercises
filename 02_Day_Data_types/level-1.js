console.log('=== Level 1 ====');

// 1- Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
const challenge = '30 Days Of JavaScript';

// 2- Print the string on the browser console using console.log()
console.log('02- ', challenge);

// 3- Print the length of the string on the browser console using console.log()
console.log('03- ', challenge.length);

// 4- Change all the string characters to capital letters using toUpperCase() method
console.log('04- ', challenge.toUpperCase());

// 5- Change all the string characters to lowercase letters using toLowerCase() method
console.log('05- ', challenge.toLowerCase());

// 6- Cut (slice) out the first word of the string using substr() or substring() method
console.log('06- ', challenge.substring(0, 3));

// 7- Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log('07- ', challenge.substring(3, 21));

// 8- Check if the string contains a word Script using includes() method
console.log('08- ', challenge.includes('Script'));

// 9- Split the string into an array using split() method
console.log('09- ', challenge.split());

// 10- Split the string 30 Days Of JavaScript at the space using split() method
console.log('10- ', challenge.split(' '));

// 11- 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log(
  '11- ',
  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(',')
);

// 12- Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log('12- ', challenge.replace('JavaScript', 'Pyhton'));

// 13- What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log('13- ', challenge.charAt(15));

// 14- What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log('14- ', challenge.charCodeAt('J'));

// 15- Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log('15- ', challenge.indexOf('a'));

// 16- Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log('16- ', challenge.lastIndexOf('a'));

const exampleWorld =
  'You cannot end a sentence with because because because is a conjunction';
// 17- Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('17- ', exampleWorld.indexOf('because'));

// 18- Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('18- ', exampleWorld.lastIndexOf('because'));

// 19- Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('19- ', exampleWorld.search('because'));

// 20- Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log('20- ', ' 30 Days Of JavaScript '.trim());

// 21- Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log('21- ', challenge.startsWith('30'));

// 22- Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log('22- ', challenge.endsWith('JavaScript'));

// 23- Use match() method to find all the a’s in 30 Days Of JavaScript
console.log('23- ', challenge.match('a'));

// 24- Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log('24- ', '30 Days of '.concat('JavaScript'));

// 25- Use repeat() method to print 30 Days Of JavaScript 2 times
console.log('25- ', challenge.repeat(2));
