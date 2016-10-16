'use strict';
//function Generate(i){
//    return function(){
//        console.log(i);
//    };
//}
//var i=40;
//Generate(i);
//i=50;
//Generate(i)
function handle(a,b){
    return (function(x,y){
        return {
            field:x*y
        }
    })(a,b);
}
console.log(typeof handle(10,20));