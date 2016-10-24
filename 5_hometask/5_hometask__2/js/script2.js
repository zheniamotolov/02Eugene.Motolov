'use strict';
var humans_array = ["Alex", "John", "Katty", "Susan", "Peter", "Robin", "Ted", "Barny"];
var city_array = ["Minsk", "London", "Grodno", "Brest", "Gomel", "Mogilev"];
var item_array = ["Macbook air", "Iphone 7 ", "Giroskoter", "Samsung s7 edge", "Lenovo g510"];
function random(min, max) {//arr[0],arr[arr.length-1]
    var rand = min + Math.random() * (max - min);
    rand = Math.round(rand);
    return rand;

}
var timerId = setTimeout(function append() {
    var newComment = document.createElement('div');
    newComment.innerHTML = "<p>" + humans_array[random(0, humans_array.length - 1)] + " from " + city_array[random(0, city_array.length - 1)] + " buy  " + random(1, 10) + " item(s) of " + item_array[random(0, item_array.length - 1)];
    messages.insertBefore(newComment, messages.firstChild);
    timerId = setTimeout(append, 1000);
}, 1000);

var timerId = setTimeout(function tick() {
  //  document.body.childNodes.length
   // document.body.childNodes[document.body.childNodes.length-1].removeChild()
    var d=document.getElementById("messages");
    console.log("hello");
    d.removeChild(d.lastElementChild);
    timerId = setTimeout(tick, 1000);
}, 10000);