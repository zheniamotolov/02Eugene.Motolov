;(function () {
    'use strict';
    function Main_Function() {
        // return "version 0.0.1"; // ...
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////

    Main_Function.get = function () {
        function byid(id) {
            return document.getElementById(id);
        }

        function bytag(tag) {
            return document.getElementsByTagName(tag);
            //document.getElementsByTagName('input')[0].value = 5;
        }

        function byattribute(attribute) {
            return document.getElementsByName(attribute);
        }

        function byclass(classname) {
            return document.getElementsByClassName(classname);
        }

        function byselector(selector_css) {
            return document.querySelectorAll(selector_css);
        }
    };


//////////////////////////////////////////////////////////////////////////////////////////////////////
    Main_Function.version = function () {
        //return Object.keys(collection).length;
        return "kek";
    };
    Main_Function.create = function (tag_name) {
        return document.createElement(tag_name);

    };
    Main_Function.append = function (parent, last_child) {
        return parent.appendChild(last_child);
    };
    Main_Function.prepend = function (parent, element) {
        parent.insertBefore(element, parent.children[0]);
    };
    Main_Function.delete = function (element) {
        element.remove();//element.parentNode.removeChild(element);
    };
    Main_Function.parent = function (element) {
        element.parentNode();
    };
    Main_Function.replace = function (new_element, old_element) {
        old_element.parentNode.replaceChild(new_element, old_element);
    };
    Main_Function.copy = function (element) {
        return element.cloneNode(true);//full copy
    };
    Main_Function.add_listener = function (element, func, event_type) {
        element.addEventListener(event_type, func);
    };
//////////////////////////////////////////////////////////////////////////////////////////////////////

    window._ = Main_Function; // в оригинальном коде здесь сложнее, но смысл тот же

}());

//alert(go.version());


