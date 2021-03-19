"use strict";
//Part 1
console.log("Hello from external Javascript");

alert("Welcome to my website!");

//Part 2
var favColor = prompt("What's your favorite color?");

alert("Cool, " + favColor + " is my favorite color too!");

//Part 3
//movie rental total exercise

var littleMermaidDaysRented = parseFloat(prompt("How many days do you want to rent The Little Mermaid?"));

var brotherBearDaysRented = parseFloat(prompt("How many days do you want to rent Brother Bear?"));

var herculesDaysRented = parseFloat(prompt("How many days do you want to rent Hercules?"));

var rentalPricePerDay = 3;

var rentalCostTotal = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * rentalPricePerDay;

alert("Your total rental cost is $" + rentalCostTotal);

//Part 3.1
//hours worked exercise

var hrlyPayGoogle = 400;

var hrlyPayAmazon = 380;

var hrlyPayFacebook = 350;

var hrsWrkedAtGoogle = parseFloat(prompt("How many hours did you work at Google this week?"));

var hrsWrkedAtAmazon = parseFloat(prompt("How many hours did you work at Amazon this week?"));

var hrsWrkedAtFacebook = parseFloat(prompt("How many hours did you work at Facebook this week?"));

var payCheck = (hrsWrkedAtGoogle * hrlyPayGoogle) + (hrsWrkedAtAmazon * hrlyPayAmazon) + (hrsWrkedAtFacebook * hrlyPayFacebook);

alert("Your paycheck for this week is $" + payCheck);

//Part 3.2
//can student be enrolled in class exercise

alert("Hello Student, please reply Yes or No to the following question(s) to find out if you can be enrolled in class. Checking class availability.");

var classHasRoom = true;
alert("Good news, the class has available spots.");

var isConflict = prompt("Please type Yes or No if you can come to class on Mondays at 5:30PM.");

var isTrueOrFalse = (isConflict.toLowerCase() === "yes");

var canEnroll = classHasRoom && isTrueOrFalse;

alert("Can you enroll in class? " + canEnroll);

//Part 3.3
//product offer exercise: A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
//Premium members do not need to buy a specific amount of products.

alert("Hello shoppers, we have a special offer going on this week, to qualify you must be a premium member or buy 2 or more items.");
var offerValidThisWeek = true;

var areYouPremium = prompt("Are you a premium member? Please type Yes or No.");
var isPremium = (areYouPremium.toLowerCase() === "yes");

var howManyItems = prompt("How many items are you buying today? Please enter a numeric value. Ex: 3");
var boughtMoreThan2 = (howManyItems >= 2);

var doYouQualify = (isPremium || boughtMoreThan2) && offerValidThisWeek;

alert("Do you qualify for offer? " + doYouQualify);