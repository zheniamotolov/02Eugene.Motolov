'use strict';
//Спросить про проблемы с table
var countries = [
    {
        name: "Belarus",
        flag: "../img/belarus.png",
        Code: "+375",
        population: ">1.000.000",
        area: 207595
    },
    {
        name: "USA",
        flag: "../img/usa.png",
        Code: "+1",
        population: "319.000.000",
        area: 9834000
    }, {
        name: "GreatBriatain",
        flag: "../img/greatbritain.png",
        Code: "+44",
        population: ">64.000.000",
        area: 243610
    },
    {
        name: "Austria",
        flag: "../img/austria.png",
        Code: "+43",
        population: "8.472.000",
        area: 83879
    }
];
var headers = ["Name of country", "code", "population", "area", "flag"];
function create_table() {
    var table = document.createElement("table");
    document.body.appendChild(table);
    var tr = document.createElement("tr");
    table.appendChild(tr);
    headers.forEach(function (item) {
        var elem_of_header = document.createElement("th");
        tr.appendChild(elem_of_header);
        elem_of_header.innerHTML = item;
    });

    // return table;
}
function create_element(item) {
//console.log(item.area);
    var tr = document.createElement("tr");
    //var tbody = document.getElementsByTagName("tbody")[0];
    var table=document.body.children[0];
    table.appendChild(tr);
    for (var key in item) {
        var td = create_element("td");
        td.innerHTML = key;
        tr.appendChild(td);
        //td.innerHTML
    }

}

create_table();
function generator() {
    countries.forEach(function (item) {
        create_element(item);
    });
}
generator();

//var x1 = document.createElement("tr");
//var x2 = document.createElement("td");
//
//var table = document.body.children[0];
//table.rows[0].cells[0].innerHTML=="kek";
//
//   // "один"



