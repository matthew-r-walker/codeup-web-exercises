"use strict";

var userInputNum;

while (true) {
    userInputNum = parseInt(prompt("Enter an odd number between 1-50."));
    if (userInputNum % 2 !== 0 && userInputNum < 50 && userInputNum >= 1) {
        console.log("Number to skip is: " + userInputNum);
        break;
    }
}
//Really gross looking loop with break and continue...
for (let i = 0; i <= 100; ++i) {
    if (i === 50) {
        break;
    } else if (i === userInputNum) {
        console.log("Yikes! Skipping number: " + userInputNum);
        continue;
    } else if (i % 2 === 0) {
        continue;
    }
    console.log("Here is an odd number: " + i);
}
