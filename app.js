"use strict";
// MULTIPLE TYPE
var year;
year = "strinf";
console.log(year);
year = 12;
console.log(year);
year = "12";
var parsedYear = parseInt(year);
console.log(year);
//ARRAYS and their TYPES
var arrString = ['a', 'dsf', 'fgd'];
var arrNumber = [1, 2, 3];
var arrBoolean = [true, false];
var arrMix = ['ad', true, 3];
var arrTup = ['a', 1];
console.log(arrString);
arrString.push('kjdhf');
console.log(arrString);
console.log(arrMix);
arrMix.push(true);
console.log(arrMix);
//OBJECTS
var person = {
    name: "Johnny",
    age: 23
};
console.log(person);
console.log(person.name + person.age);
person.name = "Phay";
if (person.name == "Phay")
    person.age = 28;
console.log(person.name + person.age);
var variable;
variable = 2021;
console.log(variable);
variable = "2021";
console.log(variable);
//FUNCTION
function sum(a, b) {
    return a + b;
}
console.log("1 + 3 = " + sum(1, 2));
//ARROW FUNCTION - c? is optional parameter
var calc;
calc = function (first, second) {
    return first + second;
};
console.log(calc(1, 2));
//VOID
var sayHi = function () {
    return console.log("void");
};
