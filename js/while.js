"use strict";

var i = 1;
while (i < 65536) {
    i = i * 2;
    console.log(i);
}

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var cones = Math.floor(Math.random() * 5) + 1;
    if (cones > allCones) {
        console.log("I cannot sell you " + cones + " cone(s) I only have " + allCones + " cone(s) left.. Sorry.");
    } else {
        allCones = allCones - cones;
        console.log(cones + ' cone(s) sold to customer. I have ' + allCones + " left to sell.");
    }
} while (allCones > 0);

console.log('Woohoo! I sold all of my cones, we\'re closed.');

