'use strict';
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var angle;
ctx.translate(canvas.height / 2, canvas.height / 2);
setInterval(Clock, 1000);

function Clock() {
    Appearnce();
    Numbers();
    Strelki(ctx,0.9 * (canvas.height / 2));
}
function Appearnce() {
    ctx.arc(0, 0, 0.9 * (canvas.height / 2), 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    //////////////////
    ctx.beginPath();
    ctx.arc(0, 0, (canvas.height / 2) * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = 'silver';
    ctx.fill();
}
function Numbers() {

    ctx.font = "35px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    for (var num = 1; num < 13; num++) {
        angle = num * Math.PI / 6;
        ctx.rotate(angle);
        ctx.translate(0, -0.9 * (canvas.height / 2) * 0.85);
        ctx.rotate(-angle);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(angle);
        ctx.translate(0, 0.9 * (canvas.height / 2) * 0.85);
        ctx.rotate(-angle);
    }
}
function Strelki(ctx){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawStrelki(ctx, hour,  0.9 * (canvas.height / 2)*0.5,  0.9 * (canvas.height / 2)*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawStrelki(ctx, minute,  0.9 * (canvas.height / 2)*0.8,  0.9 * (canvas.height / 2)*0.07);
    // second
    second=(second*Math.PI/30);
    drawStrelki(ctx, second,  0.9 * (canvas.height / 2)*0.9,  0.9 * (canvas.height / 2)*0.02);
}

function drawStrelki(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.strokeStyle = 'silver';
    ctx.stroke();
    ctx.rotate(-pos);
}