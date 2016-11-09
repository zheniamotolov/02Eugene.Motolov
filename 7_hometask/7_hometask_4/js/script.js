'use strict';
// конструктор
function Shop(name) {
    this._name = name;
    this._address = "";
    this._items_array = [];
    this._mark_up = 0;
    this._income = 0;
    this._all_items_price = 0;
}
Shop.prototype.add_item = function (name, amount, coast) {
    while (amount > 0) {
        this._items_array.push({
            "name": name,
            "coast": coast

        });
        this._all_items_price += coast;
        amount--;
    }
};
Shop.prototype.remove_item = function (amount) {
    while (amount > 0) {
        this._items_array.shift();
        amount--;
    }
};
Shop.prototype.sold_item = function (items_for_sold) {
    for (var q = 0; items_for_sold.length > q; q++) {
        for (var i = 0; this._items_array.length > i; i++) {
            if (this._items_array[i].name === items_for_sold[q]) {


                this._all_items_price -= Number(this._items_array[i].coast);
                this._income += Number(this._items_array[i].coast);
                this._items_array.splice(i, 1);
                break;
            }
        }
    }
};
Shop.prototype.shop_info = function () {
    console.log("Name:" + this._name + "\n" + "Address:" + this._address + "\n");
    console.log("items array:");
    this._items_array.forEach(function (i) {
        for (var key in i) {
            console.log(key + ":" + i[key]);
        }
    });
    console.log("mark-up:" + this._mark_up + "\n" + "income:" + this._income + "\n" + "all item price:" + this._all_items_price);

};
var shop=new Shop("Nike");
shop.add_item("kek",4,20);
shop.add_item("lol",4,3);
shop.remove_item(2);
shop.sold_item(["kek","lol"]);

//////////////////////////////////////////////////////////////
var Market = {
    array_of_shops: [new Shop("Apple"), new Shop("Google"), new Shop("Oracle"),shop],
    show_shops: function () {
        this.array_of_shops.forEach(function (i) {
            i.shop_info();
            console.log("            ");
        })
    }
};
console.log(Market.show_shops());
