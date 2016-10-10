
'use strict';
var telephone_number=prompt("Введите номер телефона");

if(/\+375[\(\-\s]?((25)|(29)|(33)|(44))[\-\)\s]?[\d\-\s]{7,9}/g.test(telephone_number))
    alert("Telephone number is correct");
else
    alert("!!!!!!!Telephone number is not correct!!!!!!!!!!");
//+375(29)8862735
//+375-29-886-27-35
//+375 29 886 27 35
