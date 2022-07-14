'use strict';
// Comments can make code readable

// Welcome to EatJavaScript

/**
 * Comments can make code readable, easy to reuse and informative
 */

// Strings
let firstName = "Patrick"
let lastName = "Aziken"
let maritalStatus = "Married"
let userCountry = "Nigeria"
let userAge = 33

// Create variables on one line
let [userId1, userId2] = [22, 34]

// Boolean
let isActivated = true
let isVerified = false

// Undefined
let newObject = {}

// Check type of data type
console.log(`The data type of ${firstName} is ${(typeof firstName)}`);
console.log(`The data type of ${lastName} is ${(typeof lastName)}`);
console.log(`The data type of ${isActivated} is ${(typeof isActivated)}`);
console.log(`The data type of ${isVerified} is ${(typeof isVerified)}`);
console.log(`The data type of an empty object is ${(typeof newObject)}`);


// Log variables on one line
console.log(`My user IDs are ${userId1} and ${userId2}!`)