'use strict';

var arrAll = [];
var childs = "";
function getEls(el) {

    arrAll.push("element: " + el);

    if (el.hasChildNodes()) {
        childs += "childs: ";
        for (var i = 0; i < el.children.length; i++) {
            childs += el.children[i] + " ,";// getEls(el.children[i]); // вызываем рекурсивно
        }

        arrAll.push(childs);
        childs="";
        for (var i = 0; i < el.children.length; i++) {
            getEls(el.children[i]); // вызываем рекурсивно
        }
    }
    else {
        arrAll.push("Nochilds:");
    }
}

function getAllEls() {
    var elem = document.getElementsByTagName('*');
    for (var i = 0; i < elem.length; i++) {
        getEls(elem[i]);
    }
    alert(arrAll.join('\n'));
}
//alert(document);}




