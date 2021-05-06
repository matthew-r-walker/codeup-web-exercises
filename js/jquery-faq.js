$(document).ready(function () {
// Attributes and CSS exercise
    $('dd').addClass('invisible');
    $('#show-all').click(function () {
        $('dd').toggleClass('invisible');
    });
    $('dt').click(function () {
        $(this).toggleClass('green-bg');
        $(this).next().toggleClass('invisible');
    });
// Traversing exercise
    $('#highlight-last').click(function () {
        $('ul').each(function () {
            $(this).children().last().toggleClass('yellow-bg');
        })
    });
    $('h3').click(function () {
        $(this).next().css('font-weight', 'bold');
    });
    $('ul').click(function () {
        $(this).children().first().css('color', 'blue');
    });
// Traversing bonus
// Adding classes and styling
    $('img').addClass('pics');
    $('body').children('div').addClass('pic-box');
    $('.pic-box').children().addClass('pic-buttons');
    $('button').css('margin', '10px');
// Image containers
    var imgContainers = $('body').children('div').children();
// Image positions
    var leftImgPos = imgContainers.first().children().first();
    var centerImgPos = imgContainers.next().children().first();
    var rightImgPos = imgContainers.last().children().first();
// Returns an object with image sources
    function evalImgSrc() {
        var leftImgSrc = imgContainers.first().children().first().attr('src');
        var centerImgSrc = imgContainers.next().children().first().attr('src');
        var rightImgSrc = imgContainers.last().children().first().attr('src');
        return {leftImgSrc: leftImgSrc, centerImgSrc: centerImgSrc, rightImgSrc: rightImgSrc};
    }
// Left image button swaps the images between left and center
    $('#left-btn').click(function () {
        var imgSrcs = evalImgSrc();
        leftImgPos.attr('src', imgSrcs.centerImgSrc);
        centerImgPos.attr('src', imgSrcs.leftImgSrc);
    });
// Center image button randomly swaps the images from center to left or right
    $('#center-btn').click(function (){
        var imgSrcs = evalImgSrc();
        var randomNum = Math.floor(Math.random() * 2);
        if (randomNum === 0) {
            centerImgPos.attr('src', imgSrcs.leftImgSrc);
            leftImgPos.attr('src', imgSrcs.centerImgSrc);
        } else {
            centerImgPos.attr('src', imgSrcs.rightImgSrc);
            rightImgPos.attr('src', imgSrcs.centerImgSrc);
        }
    });
// Right image button swaps the images between right and center
    $('#right-btn').click(function () {
        var imgSrcs = evalImgSrc();
        rightImgPos.attr('src', imgSrcs.centerImgSrc);
        centerImgPos.attr('src', imgSrcs.rightImgSrc);
    });
});