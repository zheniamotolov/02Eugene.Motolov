'use strict';
function Stack() {
    this.stack=[];
    this.push = function (item) {
        this.stack.push(item);

    };
    this.pop = function () {
        return this.stack.pop();

    };
    this.isEmpty=function(){
        if(this.stack.length==0){
            return true;
        }
        else{
            return false;
        }
    };
}
function check_braces(input_text){
    var stack=new Stack();
    for (var item=0;input_text.length>item;item++){
        switch(input_text[item]) {
            case '{':
            case '(':
            case '[':
                stack.push(input_text[item]);
                break;
            case ']':
                if(stack.isEmpty() || stack.pop() != '[')
                    return false;
                break;
            case ')':
                if(stack.isEmpty() || stack.pop() != '(')
                    return false;
                break;
            case '}':
                if(stack.isEmpty() || stack.pop() != '{')
                    return false;
                break;
        }
    }
    return stack.isEmpty();
}
var input_text= prompt("Enter a number", 'Example:101');
if(check_braces(input_text)){
    alert("yeah");
}
else{
    alert("nop");
}