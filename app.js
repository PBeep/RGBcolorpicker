var numSquares = 6;
var pickedColor;
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

var colors = ['rgb(255, 0, 0)', 'rgb(255, 0, 255)', 'rgb(255, 225, 0)', 'rgb(255, 0, 255)', 'rgb(0, 255, 255)', 'rgb(0, 255, 0)'];
var squares = document.querySelectorAll('.square');

for (i=0; i<squares.length; i++) {
    squares.style.backgroundColor = colors[i]
}

