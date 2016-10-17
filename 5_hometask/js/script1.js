//'use strict';
////Как остановть выполненеие скрипта
////Почему return не завершает функцию
////Ввод текста через консоль
//
//var Application = {
//    array_of_houses: [],
//    array_of_humans: [],
//    HOUSE: function (number_of_rooms, number_of_square_meters, material, number_of_floors, address, year_of_constraction) {
//        //this.i = 0;
//
//        return {
//            number_of_rooms: number_of_rooms,
//            number_of_square_meters: number_of_square_meters,
//            material: material,
//            number_of_floors: number_of_floors,
//            address: address,
//            year_of_constraction: year_of_constraction,
//            residents: [],
//            number_of_residents: function () {
//                return residents.length;
//            }
//        };
//    },
//
//    HUMAN: function (weight, height, name, age, work) {
//
//        return {
//            weight: weight,
//            height: height,
//            name: name,
//            age: age,
//            work: work,
//            address: "",
//            settlement: function (house) {
//                house.residents.push(this);
//                this.address = house.address;
//            }
//        };
//    },
//    Show_Arrays_of_Humans_and_Houses: function () {
//        alert("Houses");
//        alert(this.array_of_houses);
//
//        alert("Persons");
//        alert(this.array_of_humans);
//    },
//    Create_House: function () {
//        alert("Creating House");
//        var number_of_rooms = +prompt("number of rooms", "");//создание дома;
//        var number_of_square_meters = +prompt("number of square meaters", "");
//        // var Residents_array();//массив жильцов ???
//        var material = prompt("materail", "");
//        var number_of_floors = +prompt("nymber of floors", "");
//        var address = prompt("address", "");
//        var year_of_constraction = +prompt("year of constractions", "");
//
//        return this.array_of_houses.push(this.HOUSE(number_of_rooms, number_of_square_meters, material, number_of_floors, address, year_of_constraction));
//
//    },
//    Create_Human: function () {
//        alert("Creating Human");
//        var height = +prompt("heigth", "");//создание дома;
//        var weight = +prompt("weight", "");
//        var name = prompt("name", "");
//        var work = prompt("work", "");
//        var age=+prompt("age","");
//        // var home_address = prompt("address", "");
//        return this.array_of_humans.push(this.HUMAN(weight, height, name, age, work));
//        //return new this.HUMAN(weight, height, name, gender, age, work);
////creatinf human
//    },
//    Settlement_human_to_house: function (human_name, house_address) {
//        var resault_of_serching_in_humans_by_name = [];
//
//        this.array_of_humans.forEach(function (item) {
//            if (item.name === human_name) {
//                resault_of_serching_in_humans_by_name.push(item);
//            }
//        });
//        if (resault_of_serching_in_humans_by_name.length == 0) {
//            return alert("No such humans");
//            // alert("Humans with name:" + human_name + " " + resault_of_serching_in_humans_by_name)
//        }
//        var resault_of_serching_in_houses_by_address=[];
//
//        this.array_of_houses.forEach(function (item) {
//            if (item.address === house_address) {
//                resault_of_serching_in_houses_by_address.push(item);
//            //    return ;
//            }
//        });
//        if(resault_of_serching_in_houses_by_address==0){
//            alert("No such address");
//        }
//        resault_of_serching_in_humans_by_name.forEach(function (temp) {
//            temp.settlement(resault_of_serching_in_houses_by_address[0]);
//        });
//    },
//    Sort_Houses_by_number_of_settlers: function () {
//        alert("sort house by settlres");
//        var sort_houses_array = this.array_of_houses.sort(function (a, b) {
//            return a.number_of_residents() - b.number_of_residents;
//        });
//    },
//    Sort_Houses_by_address: function () {
//        alert("Sort house by address");
//        var sort_houses_array = this.array_of_houses.sort(function (a, b) {
//            return a.address.localeCompare(b.address);
//        });
//    },
//
//    Clear: function () {
//        this.array_of_houses = [];
//        this.array_of_humans = [];
//        alert("Cleaning done");
//    }
//};
//function work_application() {
//    var Houses = +prompt("number of houses");
//    var Persons = +prompt("number of persons");
//
//    for (var i = 0; i < Houses; i++) {
//        Application.Create_House();
//    }
//    console.log("Houses were created");
//
//    for (var i = 0; i < Persons; i++) {
//        Application.Create_Human();
//    }
//    console.log("Persons were created");
//
//    var number_of_settlements = +prompt("How many persons settled house?");
//    for (var i = 0; i < number_of_settlements; i++) {
//        Application.Settlement_human_to_house(prompt("Person name"), prompt("Address"));
//    }
//    alert("Sortin houses by numer of settlers");
//    Application.Sort_Houses_by_number_of_settlers();
//    alert("Sorting houses by address");
//    Application.Sort_Houses_by_address();
//    alert("Delete Houses and humans");
//    Application.Clear();
//
//}
//
//work_application();
//
alert(window.navigator.onLine)