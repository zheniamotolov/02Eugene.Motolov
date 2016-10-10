'use strict';
function check_number(input_num) {
    if (isNaN(Number(input_num))) {
        return false;
    }
    else{
       return true;
    }
}
function check_operator() {
    switch (input_operator) {
        case '/':
            return input_num_1 / input_num_2;
        case'+':
            return input_num_1 + input_num_2;
        case'-':
            return input_num_1 - input_num_2;
        case'*':
            return input_num_1 * input_num_2;
        default:
            console.log("Неверная запись оператора");
            break;
    }
    return false;
}
function result() {
    if (check_number(input_num_1) && check_number(input_num_1)) {
        if (check_operator()||check_operator()==0) {
            return check_operator();
        }
    }
    else{
        console.log ("Неверная щзапись числа");
    }
}
var input_num_1 = Number(prompt("Enter a number", 'Example:101'));
var input_operator = prompt("Enter a operator", 'Example:101');
var input_num_2 = Number(prompt("Enter a number", 'Example:101'));
console.log(result());
