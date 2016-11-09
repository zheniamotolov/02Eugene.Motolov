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
var product = new Product();

var product1 = new Product();

var product2 = new Product();

var product3 = new Product();
product3.getid();


