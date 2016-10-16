'use strict';
//Как остановть выполненеие скрипта
//Почему return не завершает функцию
//Ввод текста через консоль
function initialize_array(n, mediana, implementation) {
    var array = [];
    var i=0;
    while (true) {
        var temp = Math.floor((Math.random() * mediana));
        if ((((mediana/2) + ((mediana/2) * implementation)) >= temp) && (((mediana/2) - ((mediana/2) * implementation) <= temp))) {
          array[i]=temp;
            i++;
        }
        if(i==(n-1)){
            break;
        }
    }

    return array;
}
function compareNumbers(a, b) {
    return a - b;
}
function average(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

function application_work() {
    try {
        var size_of_array = +prompt("Enter size of array", "");
        if (size_of_array > 10000000 || size_of_array <= 0 || isNaN(size_of_array)) {
            // alert("wrong input");
            throw new Error("Data is not correct");
        }

        var mediana = +prompt("Enter average number of array", "");
        if (mediana > 10000000 || mediana < 0 || isNaN(mediana)) {
            //alert("wrong input");
            throw new Error("Data is not correct");
        }
        mediana += mediana;
        var implementation = +prompt("Enter nessesary implementation", "");
        implementation /= 100;
        if (implementation > 100 || implementation < 0 || isNaN(implementation)) {
            //alert("wrong input");
            throw new Error("Data is not correct");
        }
        var array = initialize_array(size_of_array, mediana, implementation);
        array.sort(compareNumbers);
        alert(array);
        alert("Average number=" + average(array));
    }
    catch (e) {
        alert("wrong input");
    }

}
application_work();//console.log(average(array));

