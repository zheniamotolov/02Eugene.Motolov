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
var shop = new Shop("Nike");
shop.add_item("kek", 4, 20);
shop.add_item("lol", 4, 3);
shop.remove_item(2);
shop.sold_item(["kek", "lol"]);

//////////////////////////////////////////////////////////////
function Market() {
    this._array_of_shops = [];

}
Market.prototype.show_shops = function () {
    this._array_of_shops.forEach(function (i) {
        i.shop_info();
        console.log("            ");
    })
};
Market.prototype.add_shop = function (new_shop) {
    this._array_of_shops.push(new_shop);

};
Market.prototype.remove_shop_by_name = function (shop_name) {
    for(var i=0;this._array_of_shops.length>i;i++){
    if(this._array_of_shops[i]._name===shop_name){
        this._array_of_shops.splice(i,1);
        break;
    }
    }
};
var market=new Market();
market.add_shop(new Shop("Apple"));
market.add_shop(shop);
market.add_shop(new Shop("Google"));
market.show_shops();
console.log("//////////////////");
market.remove_shop_by_name("Nike");
market.show_shops();
