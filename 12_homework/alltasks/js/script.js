//В джаваскрите при передачи массива-объектов(прелбразованного из джисона) в качестве аргументы передача производится по ссылке или по значеню
//Поему не работают переменные в конструкторе
'use strict';

function Application() {
    //this.div_hash_info = //Почему так не работает


    //  console.log(this.div_wrapper);
}

Application.prototype.create_info = function (info_array) {

    this.div_hash_info = document.getElementById('hash_info');
    //div_hash_info.appendChild(ul);
    for (var i = 0; i < info_array.length; i++) {
       this.div_hash_info.innerHTML += " <div class='content'>"  + "<div class='img'><img class='img_icon' " +
            "src='" + info_array[i].image + "'></div><div class='text'><p>" + info_array[i].name + "</p> <p>" + info_array[i].info + "</p> <p id='cost'>" +
            info_array[i].cost + "</p></div>"+"<div class='manipulator'> <span class='operations'>-</span> <span>0</span> <span class='operations'>+</span> <span>0</span>";

    }

};
Application.prototype.create_menu = function (menu_array) {
    this.div_wrapper = document.getElementById('wrapper');
    for (var i = 0; i < (menu_array).length; i++) {
        this.div_wrapper.innerHTML += "<li><a href=" + "'" + (menu_array)[i].hash + "'" + ">" + (menu_array)[i].title + "</a></li>";

    }

};
Application.prototype.get = function (name, state) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', name + ".json", true);
    xhr.send();
    xhr.onreadystatechange = function () { // (3)
        if (xhr.readyState != 4) return;
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
        } else {
            if (state == 1) {
                // div_wrapper.innerHTML = "";
                Application.prototype.create_menu(JSON.parse(xhr.responseText));

            }
            else if (state == 2) {


                Application.prototype.create_info(JSON.parse(xhr.responseText));


            }
        }
    }
};
Application.prototype.create = function () {
    Application.prototype.get("categories", 1);
};
Application.prototype.change = function () {
    this.div_hash_info = document.getElementById('hash_info');
    this.div_hash_info.innerHTML = "";
    Application.prototype.get(location.hash.substring(1, location.hash.length), 2);
};

var application = new Application();
(function () {
    //console.log("loacation hsah="+location.hash);
    if (location.hash != "") {
        application.change();
    }
})();//вызов неявно заданной функции
var minus=document.getElementsByTagName("span")[0];
//console.log(plus);
var plus=document.getElementsByTagName("span")[2];
//console.log(minus);
var quantity=document.getElementsByTagName("span")[1];
var cost=document.getElementById("cost");
var prise=document.getElementsByTagName("span")[3];
//console.log(prise);
var i=0;
function remove() {

    if(Number(quantity.innerText)<=1){

        return;
    }
    else{
        // quantity.innerText=(Number(quantity.innerText)-1);
        i--;
        quantity.innerText=i;
        prise.innerText=(Number(quantity.innerText)-1)*(Number(cost.innerText));
        console.log("(Number(cost.innerText))="+(Number(cost.innerText)));
    }
}

function add() {
    i++;
    prise.innerText=((Number(quantity.innerText)+1)*(Number(cost.innerText)));
    quantity.innerText=i;
    console.log("Number(quantity.innerText)+1="+(Number(quantity.innerText)+1));
    console.log("(Number(cost.innerText))="+(Number(cost.innerText)));
}

document.addEventListener("DOMContentLoaded", application.create);
window.onhashchange = application.change;


// function start(){
//     var application = new Application();
//     application.create();
// }
// document.addEventListener("DOMContentLoaded",start);
// (function () {
//     //console.log("loacation hsah="+location.hash);
//     if (location.hash != "") {
//         this.application.change();
//
//     }
// })().call(start);//вызов неявно заданной функции
