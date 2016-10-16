'use strict';
//Как остановть выполненеие скрипта
//Почему return не завершает функцию
//Ввод текста через консоль
var houses=[];
var Application = {
    HOUSE: function (number_of_rooms, number_of_square_meters, material, number_of_floors, address, year_of_constraction) {
        //this.i = 0;
        this.number_of_residents = 0;
        this.Residents_array = function (name) {
            this.number_of_residents.push(name)

        };
        this.number_of_rooms = number_of_rooms;
        this.number_of_square_meters = number_of_square_meters;
        this.material = material;
        this.number_of_floors = number_of_floors;
        this.address = address;
        this.year_of_constraction = year_of_constraction;
        this.Number_of_residents = function () {
            return Application.number_of_residents.length;
        }
    },

    HUMAN: function (weight, height, name, gender, age, work) {
        this.weight = weight;
        this.height = height;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.work = work;
        this.home_address = "";
        this.Settlement = function () {
            //  this.home_address;
            // home_address = this.address;///поселит человека по егоадресу
        }

    },
    Create_House: function () {
        alert("Creating House");
        var number_of_rooms = +prompt("number of rooms", "");//создание дома;
        var number_of_square_meters = +prompt("number of square meaters", "");
        // var Residents_array();//массив жильцов ???
        var material = prompt("materail", "");
        var number_of_floors = +prompt("nymber of floors", "");
        var address = prompt("address", "");
        var year_of_constraction = +prompt("year of constractions", "");

        return new this.HOUSE(number_of_rooms, number_of_square_meters, material, number_of_floors, address, year_of_constraction);

    },
    Create_Human: function () {
        alert("Creating Human");
        var height = +prompt("heigth", "");//создание дома;
        var weight = +prompt("weight", "");
        var name = prompt("name", "");
        var gender = prompt("materail", "");
        var age = prompt("nymber of floors", "");
        var work = prompt("work", "");
        // var home_address = prompt("address", "");
        return new this.HUMAN(weight, height, name, gender, age, work);
//creatinf human
    },
    Settlement_human_to_house: function (name) {

    },
    Sort_Houses_by_number_of_settlers: function () {

    },
    Clear: function () {

    }


};


