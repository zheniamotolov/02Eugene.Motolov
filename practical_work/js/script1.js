'use strict';
var Questions = [
    {
        question: "1+1",
        variants: ["1)2 ", "2)6", "3)8", "4)10"],
        answer: "0",
        value:"10"

    },

    {
        question: "2+2",
        variants: ["1)2 ", "2)4", "3)8", "4)10"],
        answer: "1",
        value:"8"
    },
    {
        question: "2*10",
        variants: ["1)20 ", "2)4", "3)8", "4)10"],
        answer: "0",
        value:"6"
    },
    {
        question: "2+10",
        variants: ["1)20 ", "2)4", "3)8", "4)12"],
        answer: "3",
        value:"4"
    }
];
function result() {

}
var Answers = ["", "", "", ""];
function set_answer(array_number) {
    var checkboxes = document.getElementsByTagName("input");

    if (Answers[array_number] != "") {
        console.log("cheakboxes leangth:" + checkboxes.length + "=======" + array_number + " -----" + Answers, checkboxes, array_number * 1);
        checkboxes[Answers[array_number] * 1].checked = true;
    }

}
function is_checked(array_number) {
    var checkboxes = document.getElementsByTagName("input");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            Answers[array_number] = i.toString();
        }
    }

}
function next_question() {
    if (this.getAttribute("question_number") == (Answers.length - 1)) {
        alert("end");
        return;
    }
    is_checked(Number(this.getAttribute("question_number")));
    var delete_element = document.getElementsByTagName("div")[0];
    // delete_element.style.dispaly="none"; ///It was a goood realization maybe next time
    delete_element.parentNode.removeChild(delete_element);
    generate_question(Number(this.getAttribute("question_number")) + 1);
}
function previous_question() {

    if (this.getAttribute("question_number") === "0") {
        alert("begin");
        return;
    }
    is_checked(Number(this.getAttribute("question_number")));
    var delete_element = document.getElementsByTagName("div")[0];
    // delete_element.style.dispaly="none"; ///It was a goood realization maybe next time
    // var delete_element=document.getElementsByTagName("div")[0];
    delete_element.parentNode.removeChild(delete_element);
    generate_question(Number(this.getAttribute("question_number")) - 1);
}
function check_answers() {
    var rite = 0;

    for (var i = 0; i < Questions.length; i++) {
        // console.log("Questions[i].answer"+Questions[i].answer+"--Answers[i]"+Answers[i]);
        if (Questions[i].answer === Answers[i]) {
            rite+=Number(Questions[i].value);

        }
    }
    //28

    return ((rite / 28) * 100);
    // for(var key in Questions){
    //
    //     if(Questions[key]===Answers[i]){
    //         rite++;
    //     }
    //     i++;
    // }
    // return


}
function button_click() {
    var delete_element = document.getElementsByTagName("div")[0];
    delete_element.parentNode.removeChild(delete_element);

    console.log("Successs:" + check_answers() + "%");
    var progress = document.createElement("progress");
    progress.setAttribute("max", "100");
    progress.setAttribute("value", check_answers());
    var span = document.createElement("span");
    span.setAttribute("id","value");
    document.body.appendChild(progress);
    progress.appendChild(span);
}
function generate_question(array_number) {
    var form = document.createElement("div");
    if (array_number == (Answers.length - 1)) {
        var button = document.createElement("input");
        button.setAttribute("type", "button");
        button.setAttribute("value", "result");
        form.appendChild(button);
        button.addEventListener("click", button_click);
    }
    var span2 = document.createElement("span");
    span2.innerHTML = "	&lt";
    form.appendChild(span2);
    span2.setAttribute("question_number", array_number);
    span2.addEventListener("click", previous_question);


    var span1 = document.createElement("span");
    span1.innerHTML = "&gt";
    form.appendChild(span1);
    span1.setAttribute("question_number", array_number);
    span1.addEventListener("click", next_question);


    // form.setAttribute("id", "form");
    var question = document.createElement("div");

    // question.setAttribute("id", "question");
    question.innerHTML = Questions[array_number].question;
    document.body.appendChild(form);
    form.appendChild(question);
    for (var i = 0; i < Questions[array_number].variants.length; i++) {
        var label = document.createElement("label");
        var input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("name", "var");
        question.appendChild(label);
        label.innerHTML = Questions[array_number].variants[i];
        label.appendChild(input);


    }
    set_answer(array_number);

}
generate_question(0);