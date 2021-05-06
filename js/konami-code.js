"use strict";
// The Konami Code: Up, Up, Down, Down, Left, Right, Left, Right, B, A ( ↑ ↑ ↓ ↓ ← → ← → B A )
var konamiCodeKeyCode = '3838404037393739666513';
var userInput = '';
function enterArcade() {
    if (konamiCodeKeyCode === userInput) {
        alert('You have added 30 lives!');
        $('body').css('background-image', 'url("img/konami-arcade.png")');
        $('#konami-code').remove();
        $('#konami-header').css('display', 'block');
        $('.first-page').removeClass();
    } else if (userInput.length === 22 && konamiCodeKeyCode !== userInput) {
        alert('Incorrect code, try again.');
        return userInput = '';
    }
}
// Keylistener for konami code
$(document).keyup(function(e){
    userInput += '' + e.keyCode;
    enterArcade();
});
// Area listeners for konami-code image map
$('#up').click(function (){
    userInput += '38';
});
$('#down').click(function (){
    userInput += '40';
});
$('#left').click(function (){
    userInput += '37';
});
$('#right').click(function (){
    userInput += '39';
});
$('#b-button').click(function (){
    userInput += '66';
});
$('#a-button').click(function (){
    userInput += '65';
});
$('#start-button').click(function (){
    userInput += '13';
    enterArcade();
});