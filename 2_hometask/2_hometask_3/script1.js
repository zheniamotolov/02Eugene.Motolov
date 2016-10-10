'use strict';
var telephone_number=prompt("Enter telephone number");

if((/\+375[\(\-\s]?((25)|(29)|(33)|(44))[\-\)\s]?[\d]{7}/g.test(telephone_number))||(/\+375[\(\-\s]?((25)|(29)|(33)|(44))[\-\)\s]?([\d]{3})[\-\s]([\d]{2})[\-\s]([\d]{2})/g.test(telephone_number)))
    alert("Telephone number is correct");
else
    alert("!!!!!!!Telephone number is not correct!!!!!!!!!!");
//+375(29)8862735
//+375-29-886-27-35
//+375 29 886 27 35
