

var audio = document.getElementById("audio");
var play_pause = document.getElementById("play_pause");
var stop = document.getElementById("stop");
var mute_unmute = document.getElementById("mute_unmute");
var faster = document.getElementById("faster");
var slower = document.getElementById("slower");
var repeat = document.getElementById("repeat");
var time = document.getElementById("time");
var timerid;
var range = document.getElementById("range");
var value_range = range.getAttribute("value");
var meter = document.getElementById("meter");
var progressid;
function good_view_of_tiem() {//audio.currentTime,audio.duration
    if (audio.currentTime == 60) {
        return Math.floor(audio.currentTime) - 60 + "/" + Math.floor((audio.duration % (60 * 60)) / 60);
    }
    return Math.floor(audio.currentTime) + "/" + Math.floor((audio.duration % (60 * 60)) / 60);

}
function timer() {
    timerid = setInterval(function () {
        console.log("work");
        time.innerText = good_view_of_tiem();
    }, 900);
    time.innerText = good_view_of_tiem();

}
function play_func() {
    if (audio.paused) {
        play_pause.style.backgroundImage = "url('images/pause.png')";
        audio.play();
        timer();
        progress_bar();
    }
    else {
        audio.pause();
        play_pause.style.backgroundImage = "url('images/play.png')";
        clearInterval(timerid);
        clearInterval(progressid);
    }
}
play_pause.addEventListener("click", play_func); // Спасибо!

function stop_func() {
    play_pause.style.backgroundImage = "url('images/play.png')";
    audio.pause();
    meter.value = 0;

}
stop.addEventListener("click", stop_func);
function mute_unmute_func() {
    if (audio.muted) {
        mute_unmute.style.backgroundImage = "url('images/mute.png')";
        audio.muted = false;

    }
    else {
        audio.muted = true;
        mute_unmute.style.backgroundImage = "url('images/unmute.png')";
    }
}
mute_unmute.addEventListener("click", mute_unmute_func);
function faster_func() {
    if (audio.playbackRate < 5) {
        audio.playbackRate *= 1.5;
    }
}
faster.addEventListener("click", faster_func);
function slower_func() {
    if (audio.playbackRate > 0) {
        audio.playbackRate /= 1.5;
    }
}
slower.addEventListener("click  ", slower_func);

function repeat_func() {
    if (audio.loop) {
        audio.loop = false;
    }
    else {
        audio.loop = true;
    }
}
repeat.addEventListener("click", repeat_func);

function range_func() {

    audio.volume = range.value / 10;

    //audio.volume[0,1]
}
range.addEventListener("change", range_func);

function progress_bar() {
    progressid = setInterval(function () {
        //time.innerText = progre();

        meter.value = audio.currentTime;//240000
        console.log(audio.currentTime);
    }, 1000);

}
function meter_func(e) {
    //audio.volume=range.value/10;
    audio.currentTime = e.clientX / this.clientWidth * audio.duration;//240000
    console.log(2)  ;
    this.value = audio.currentTime;
}
meter.addEventListener("click", meter_func);

window.onload = function () {
    // if (localStorage.time) {
    //    audio.currentTime = localStorage.time * 1;
    //}
    // var minutes = Math.floor( (time % (60 * 60)) / 60);
    time.innerText = "0:" + Math.floor((audio.duration % (60 * 60)) / 60);

};
audio.addEventListener("loadeddata", function () {
     if (localStorage.time) {
         audio.currentTime = localStorage.time * 1;
         // console.log(1)
     }



    // window.setInterval(function () {
        // localStorage.time = audio.currentTime+"";
    // }, 900);





});

//audio.addEventListener()

//window.setInterval(function () {
  //  localStorage.time = audio.currentTime;
//}, 900);
