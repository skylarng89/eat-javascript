"use strict";
// Create Challenge Variable
let challengeName = "30 Days of JavaScript";
console.log(`The challenge name is called '${challengeName}'.`);

//Print length of the string
console.log(`The length of the string "challengeName" is: ${challengeName.length}`);

//Change toUpperCase()
console.log(`Using toUpperCase() for 'challengeName: ${challengeName.toUpperCase()}`);

//Change toLowerCase()
console.log(`Using toLowerCase() for 'challengeName: ${challengeName.toLowerCase()}`);

//Slice out of the first word of the string using substring()
let slicedStr = challengeName.substring(3, 21);
console.log(`The first word from sliced variable 'challengeName' is: ${slicedStr}`);

// Check if string is in substring using includes() method
let subString = "Script"
console.log(`The word "${subString}" ${challengeName.includes(subString) ? 'is' : 'is not'} in the sentence`);
/**
// Split a string
console.log(`I have split the string to: ${challengeName.split(' ')}`);

// Split string at comma
let brands = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let splitBrands = []
splitBrands.push(brands.split(','))

console.log(`Brands: ${brands} \n The split brands are: ${brands.split(', ')}`);

// Replace string using replace()
console.log(`Replace JavaScript with Python: ${challengeName.replace('JavaScript', 'Python')}`);

// Find character at index using charAt()
console.log(`String in 'challengeName' is: ${challengeName} \n The character at index 15 in 'challengeName' is: ${challengeName.charAt(15)}`);

// Find character code using charCodeAt()
console.log(`String in 'challengeName' is: ${challengeName} \n The character code of 'J' in 'challengeName' is: ${challengeName.charCodeAt('J')}`);
*/