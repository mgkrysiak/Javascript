//zad1 z wykladowca

String.prototype.upperLower = function(arg)
{

  var phrase = "";
  var counter = 0;
  for (var i = 0; i < this.length; i++) {

    if(counter % 2 == 0) {
      phrase += this.charAt(i).toLowerCase();
    } else {
      phrase += this.charAt(i).toUpperCase();
    }
    if(this.charAt(i) != " ") {
      counter++;
    }
  }

  console.log(phrase + arg);
  return phrase;
}


var t = new String("Cokolwiek co ma sens");
t.upperLower(" albo i go nie ma");

//zad1 samodzielne

var book = {
  title: "Gone with The Wind",
  author: "Margaret Mitchell",
  numberOfPages: "800",
}

//zad2
var person = {
  name: "Name",
  age: "27",
  sayHello: function() {
    console.log("Hello");
  }
}

//zad3
var train = {};

console.log(train instanceof Object)

//zad4
var car = {
  brand: "Tesla",
  color: "czarna",
  numberOfKilometers: 0,
  printCarinfo: function() {console.log("Jestem " + this.color + " " + this.brand + ",przejechalem " + this.numberOfKilometers + " km")},
  drive: function(km) { return this.numberOfKilometers += km }
}





car.printCarinfo();
car.drive(400);
car.printCarinfo();

//zad5

car.controls = [];

car.addControl = function(data) {this.controls.push(data);}

car.printControls = function() {
  for (var i = 0; i < this.controls.length; i++) {
    console.log(this.controls[i]);
  }
}

car.addControl(2012);
car.addControl(2014);
car.addControl(2016);

car.printControls();

//zad6
var myString = "dowolny tekst";
console.log(myString instanceof Object);

var myNumber = 1234;
console.log(myNumber instanceof Object);

//zad8
//w pliku zadanie03;

//zad9
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = function() {
    return this.width*this.height;
  }
  this.getPerimeter = function() {
    return width*2+height*2;
  }
}

var kwadrat = new Rectangle(20, 20);
console.log(kwadrat.getArea());
console.log(kwadrat.getPerimeter());

var prostokat = new Rectangle(500, 800);
console.log(prostokat.getArea());
console.log(prostokat.getPerimeter());

//zad10
var Calculator = function()
{
  this.calculations = [];

}

Calculator.prototype.add = function(num1, num2){

  this.calculations.push("Added " + num1 + " and " + num2 + " got result " + (num1 + num2));

  return num1 + num2;
}
Calculator.prototype.multiple = function(num1, num2){

  this.calculations.push("Multiply " + num1 +" and " + num2 + " got result " + (num1 * num2));

  return num1 * num2;
}
Calculator.prototype.subtract = function(num1, num2){

  this.calculations.push("Subtract " + num1 +" and " + num2 + " got result " + (num1 - num2));

  return num1 - num2;
}
Calculator.prototype.divide = function(num1, num2){

  this.calculations.push("Divide " + num1 +" and " + num2 + " got result " + (num1 / num2));

  return num1 / num2;
}
Calculator.prototype.printOperations = function(num1, num2){

  for (var i = 0; i < this.calculations.length; i++) {
    console.log(this.calculations[i]);
  }
}
Calculator.prototype.clear = function(){

this.calculations = [];

}

Calculator.prototype.countAll = function(num1, num2)
{
  this.add(num1, num2);
  this.subtract(num1, num2);
  this.divide(num1, num2);
  this.multiple(num1, num2);
}

var cal = new Calculator();

cal.add(2,3);
cal.divide(2,3);
cal.multiple(2,3);
cal.subtract(2,3);
cal.add(17,234);
cal.divide(217,234);
cal.multiple(17,234);
cal.subtract(17,234);

cal.countAll(10,10);
cal.countAll(100,100);
cal.countAll(13,13);
