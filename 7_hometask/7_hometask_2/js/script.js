'use strict';
// конструктор
function Product() {
    this._name="";
    this._type="";
    this._id=Product._id++;
    this._price="";
    this._date="";
}
Product._id = 0;

Product.prototype.getid = function () {
        alert("Колличество созданный объектов: "+this._id);
};

function Food_Product() {
    this._best_before="kke";
}
Object.defineProperty(Food_Product.prototype, "storage_life", {
     value:"date here",
    writable: false
});
Food_Product.prototype = Object.create(Product.prototype);
Food_Product.prototype.constructor = Food_Product;
var kek=new Food_Product();
console.log(kek.storage_life);//Почему не работает

