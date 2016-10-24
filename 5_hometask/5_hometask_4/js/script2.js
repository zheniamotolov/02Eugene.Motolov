'use strict';

function getAllEls() {
    var arrAll = [];

    function getEls(el) {
        var chNodes,
            i;
        if(el.nodeType==8){
            arrAll.push(el.nodeValue);
        }
        if (el.hasChildNodes()) {
            chNodes = el.childNodes;
            for (i = 0; i < chNodes.length; i++) {
                getEls(chNodes[i]); // вызываем рекурсивно
            }
        }
    }

    getEls(document);
    alert(arrAll.join('\n'));
}


//alert(document);}




