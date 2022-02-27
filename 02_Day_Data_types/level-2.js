console.log('=== Level 2 ====');

// 1- Using console.log() print out the following statement:
console.log(
  '1-',
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

// 2- Using console.log() print out the following quote by Mother Teresa:
console.log(
  '2-',
  '"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."'
);

// 3- Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log('3-a - not equal ', '10' === 10);
console.log('3-b - equal ', Number('10') === 10);

// 4- Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log('4-a - not equal', parseFloat('9.8') === 10);
console.log('4-b - equal', Math.round(parseFloat('9.8')) === 10);

// 5- Check if 'on' is found in both python and jargon
const word1 = 'python';
const word2 = 'jargon';

console.log('5-a ', word1.includes('on'));
console.log('5-b ', word2.includes('on'));

// 6- I hope this course is not full of jargon. Check if jargon is in the sentence.
const sentences = 'I hope this course is not full of jargon';
console.log('6- ', sentences.includes('jargon'));

const random = Math.random();
// 7- Generate a random number between 0 and 100 inclusively.
console.log('7- ', Math.floor(random * 110));

// 8- Generate a random number between 50 and 100 inclusively.
console.log('8- ', Math.floor(random * (100 - 50 + 1)) + 50);

// 9- Generate a random number between 0 and 255 inclusively.
console.log('9- ', Math.floor(random * 256));

// 10- Access the 'JavaScript' string characters using a random number.
let js = 'JavaScript';
let randomIndex = Math.floor(Math.random() * (js.length - 1));
console.log(js[randomIndex]);

// 11- Use console.log() and escape characters to print the following pattern.
console.log(
  '11- ',
  '\n 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125'
);

/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/

// 12- Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
const string =
  'You cannot end a sentence with because because because is a conjunction';
const firstBecauseStart = string.indexOf('because') - 1; // -1 for empty space
const lastBecauseStart = string.lastIndexOf('because');
const beacuseLength = 'because'.length;
const lastBeacuseAddedBeacuseLength = lastBecauseStart + beacuseLength + 1; // +1 for empty space
const stringLength = string.length;

console.log(
  '12- ',
  string.substring(0, firstBecauseStart),
  string.substring(lastBeacuseAddedBeacuseLength, stringLength)
);
