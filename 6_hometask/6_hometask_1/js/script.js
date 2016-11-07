'use strict';
var canvas = document.getElementById("mazecanvas");
var context = canvas.getContext("2d");
var currRectX = 425;
var currRectY = 3;
var mazeWidth = 556;
var mazeHeight = 556;
function drawMazeAndRectangle(rectX, rectY) {
    makeWhite(mazeWidth, 0, canvas.width - mazeWidth, canvas.height);
    var mazeImg = new Image();
    mazeImg.onload = function () {
        context.drawImage(mazeImg, 0, 0);
        drawRectangle(rectX, rectY, "#0000FF");
        context.beginPath();
        context.arc(542, 122, 7, 0, 2 * Math.PI, false);
        context.closePath();
        context.fillStyle = '#00FF00';
        context.fill();
    };
    mazeImg.src = "js/maze.gif";
}
function drawRectangle(x, y, style) {
    makeWhite(currRectX, currRectY, 15, 15);
    currRectX = x;
    currRectY = y;
    context.beginPath();
    context.rect(x, y, 15, 15);
    context.closePath();
    context.fillStyle = style;
    context.fill();
}
function moveRect(e) {
    var newX;
    var newY;
    var movingAllowed;
    switch (e.keyCode) {
        case 38:
        case 87:
            newX = currRectX;
            newY = currRectY - 3;
            break;
        case 37:
        case 65:
            newX = currRectX - 3;
            newY = currRectY;
            break;
        case 40:
        case 83:
            newX = currRectX;
            newY = currRectY + 3;
            break;
        case 39:
        case 68:
            newX = currRectX + 3;
            newY = currRectY;
            break;
        default:
            return;
    }
    movingAllowed = canMoveTo(newX, newY);
    if (movingAllowed === 1) {
        drawRectangle(newX, newY, "#0000FF");
        currRectX = newX;
        currRectY = newY;
    }
    else if (movingAllowed === 2) {

        makeWhite(0, 0, canvas.width, canvas.height);
        makeWhite(currRectX, currRectY, 15, 15);
        context.font = "40px Arial";
        context.fillStyle = "blue";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("Congratulations!", canvas.width / 2, canvas.height / 2);
        window.removeEventListener("keydown", moveRect, true);
    }
}
function canMoveTo(destX, destY) {
    var imgData = context.getImageData(destX, destY, 15, 15);
    var data = imgData.data;
    var canMove = 1;
    if (destX >= 0 && destX <= mazeWidth - 15 && destY >= 0 && destY <= mazeHeight - 15) {
        for (var i = 0; i < 4 * 15 * 15; i += 4) {
            if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0) {
                canMove = 0;

                break;
            }
            else if (data[i] === 0 && data[i + 1] === 255 && data[i + 2] === 0) {
                canMove = 2;
                break;
            }
        }
    }
    else {
        canMove = 0;
    }
    return canMove;
}
function makeWhite(x, y, w, h) {
    context.beginPath();
    context.rect(x, y, w, h);
    context.closePath();
    context.fillStyle = "white";
    context.fill();
}
drawMazeAndRectangle(425, 3);
window.addEventListener("keydown", moveRect);