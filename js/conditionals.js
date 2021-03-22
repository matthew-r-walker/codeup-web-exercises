"use strict";

/* ########################################################################## */

/**
 * TODO:1
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// var analyzeColor = function(color) {
//         if (color.toLowerCase() === 'red') {
//             return 'Strawberries are red.';
//         } else if (color.toLowerCase() === 'orange') {
//             return 'Oranges are orange.';
//         } else if (color.toLowerCase() === 'yellow') {
//             return 'Bananas are yellow.';
//         } else if (color.toLowerCase() === 'green') {
//             return 'Grass is green.';
//         } else if (color.toLowerCase() === 'blue') {
//             return 'The sky is blue.';
//         } else if (color.toLowerCase() === 'indigo') {
//             return 'Sometimes grapes are indigo.';
//         } else if (color.toLowerCase() === 'violet') {
//             return 'Violas are violet.';
//         } else {
//             return 'I don\'t know anything about ' + color;

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:2
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:3
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor(color) {
    switch(color.toLowerCase()) {
        case 'red':
            return 'Strawberries are red.';
        case 'orange' :
            return 'Oranges are orange.';
        case 'yellow' :
            return 'Bananas are yellow.';
        case 'green' :
            return 'Grass is green.';
        case 'blue' :
            return 'The sky is blue.';
        case 'indigo' :
            return 'Sometimes grapes are indigo';
        case 'violet' :
            return 'Violas are violet';
        default:
            return 'I don\'t know anything about ' + color + '.';
    }
}

/**
 * TODO:4
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userInputColor = prompt('Please enter a color.');
alert(analyzeColor(userInputColor));

/* ########################################################################## */

/**
 * TODO:5
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNum, totalAmount) {
    switch(luckyNum) {
        case 0:
            return totalAmount;
        case 1:
            return totalAmount * .90;
        case 2:
            return totalAmount * .75;
        case 3:
            return totalAmount * .65;
        case 4:
            return totalAmount * .50;
        case 5:
            return totalAmount - totalAmount;
    }
}

/**
 * TODO:6
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = parseFloat(prompt('Hello Walmart shopper, what is your total bill today?'));
var totalAfterDiscount = calculateTotal(luckyNumber, totalBill);

alert('We\'re running a special promotion today, based on a random number from 0-5, you\'ll get a percentage off of your total bill.');
alert('Generating random number....');
alert('Your lucky number is ' + luckyNumber + '.' + ' Your price before discount is $' + totalBill.toFixed(2) + '.');
alert('After discount your total bill is $' + totalAfterDiscount.toFixed(2) + '.');

/**
 * TODO:7
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// if (confirm('Would you like to enter a number?')) {
//     var userInputNum = prompt('What number would you like to enter?');
// }
//
// if (isNaN(userInputNum)) {
//     alert('That is not a number.');
// } else {
//     (userInputNum % 2 === 0) ? alert(userInputNum + ' is even.') : alert(userInputNum + ' is odd.');
//     alert('Your number plus 100 is ' + (parseFloat(userInputNum) + 100) + '.');
// }
//
// if (userInputNum > 0) {
//     alert(userInputNum + ' is positive.');
// } else if (userInputNum < 0) {
//     alert(userInputNum + ' is negative');
// } else {
//     alert('Zero is not positive or negative.');
// }

//Refactoring using functions below.
// #########################################################################################

//Takes a number and checks if it's odd or even.
function isOddOrEven(num) {
    return (num % 2 === 0) ? (num + ' is even.') : (num + ' is odd.');
}
//Takes a number and checks if it is positive or negative.
function isPosOrNegOrZero(num) {
    if (num > 0) {
        return (num + ' is positive.');
    } else if (num < 0) {
        return (num + ' is negative');
    } else {
        return ('Zero is not positive or negative.');
    }
}
//Takes a number and adds 100 to it.
function adds100ToNumber(num) {
    return ('Your number plus 100 is ' + (parseFloat(num) + 100) + '.');
}
//#########################################################################################

//Asks the user if they would like to enter a number and if so prompts for the number they wish to enter.
if (confirm('Would you like to enter a number?')) {
    var userInputNum = parseFloat(prompt('What number would you like to enter?'));
}
//Alerts if the number is odd or even, alerts what the number is plus 100, alerts if it's positive or negative
//and alerts if it is not a number.
if (!isNaN(userInputNum)) {
    alert(isOddOrEven(userInputNum));
    alert(adds100ToNumber(userInputNum));
    alert(isPosOrNegOrZero(userInputNum));
} else {
    alert('That is not a number.');
}