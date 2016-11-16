'use strict';
var _ = {

    replace: function (element, target) {
        return target.parentNode.replaceChild(element, target);
    },
    create: function (element) {
        return document.createElement(element);
    },

    append: function (element, target) {
        return target.appendChild(element);
    },

    prepend: function (element, target) {
        return target.insertBefore(element, target.firstChild);
    },

    remove: function (element) {
        return element.parentNode.removeChild(element);
    },
    pageready: function (func) {
        return document.addEventListener("DOMContentLoaded", func);
    },
    get: {
        byid: function (id) {
            return document.getElementById(id);
        },
        bytag: function (tag) {
            return document.getElementsByTagName(tag);
        },
        byclass: function (className) {
            return document.getElementsByClassName(className);
        },
        byname: function (name) {
            return document.getElementsByName(name);
        },
        queryselector: function (querySelector) {
            return document.querySelector(querySelector);
        }
    },
    isEmpty: function (element) {
        if (element.childNodes.length == 0)
            return "Empty";
        else
            return "Not empty";
    },
    event: function (type, element, func) {
        if (element.addEventListener) {// For all major browsers, except IE 8 and earlier
            return element.addEventListener(type, func);
        }

        else {
            return element.attachEvent(type, func);
        }
    },
    unevent: function (type, element, func) {
        if (element.removeEventListener) {
            return element.removeEventListener(type, func);
        }
        else {
            return element.detachEvent(type, func);
        }
    },
    dispatch: function (type, element) {   // кроме  IE8-
        if (document.createEvent) {
            var evt = document.createEvent("Event");
            evt.initEvent(type, true, true);
            return element.dispatchEvent(evt);
        }
        else if (document.createEventObject) {   //IE8-
            var evt = document.createEventObject();
            return element.fireEvent(type, evt);
        }
    },
    addclass: function (element, className) {
        return element.classList.add(className)
    },
    removeclass: function (element, className) {
        return element.classList.remove(className)
    },
    ajax: function (method, path) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, path, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.status != 200) {
                // обработать ошибку
                alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
            } else {
                // вывести результат
                alert(xhr.responseText); // responseText -- текст ответа.
            }
        }

    },
    ajaxget: function (path) {
        ajax("GET", path);
    }

};





