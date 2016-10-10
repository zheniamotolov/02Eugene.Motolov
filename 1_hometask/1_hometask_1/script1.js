'use strict';

var buffer_variable = 0; //это хорошо ???
var enter_number="";
function input_from_user() {
    enter_number = prompt("Enter a number", 'Example:101');
}
function Sum_of_numeral_in_number(enter_number) {
    //var buffer_variable=0; ????
    if (enter_number > 0) {
        buffer_variable += (enter_number % 10);
        enter_number /= 10;
        enter_number-=(enter_number%1);
        Sum_of_numeral_in_number(enter_number);
    }
    //return buffer_varible; ???
}
input_from_user();
if (isNaN(Number(enter_number))) {
    alert("Enter only a number")
    input_from_user();

}
else {
    Sum_of_numeral_in_number(enter_number)
    alert(buffer_variable);
}
