'use strict';

function sayHi() {

    var res= [].slice.call(arguments).reduce(function(sum, current) {
        return sum + current;
    }, 0);
    alert(res);
}

sayHi(1,3,6,8,9); // 'Привет, Винни', 'Привет, Пятачок'