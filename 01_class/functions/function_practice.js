"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
// Making the arguments to be specific data type
//
function contacts(name, email, isPaid) {
    // We need to specify the types if no all var would be assigned to any data type but 
    // its not a good practice
    console.log("".concat(name, " ").concat(email, " ").concat(isPaid));
}
contacts("Ayush", "a@a.com", true);
// In arrow function 
var contacts_2 = function (name, email, isPaid) {
    console.log("".concat(name, " ").concat(email, " ").concat(isPaid));
};
//
//Making the function output to specific type
//
var getValue = function (num) {
    console.log(num);
    return num;
};
// if there is no return use `void`
var consoleVal = function (num) {
    console.log(num);
};
//to throw error or terminste the programm use `never`
var errThrow = function (err) {
    throw err;
};
// for arrays
var heros = ["thor", "ironman", "spiderman"];
heros.map(function (hero) {
    console.log(hero);
});
