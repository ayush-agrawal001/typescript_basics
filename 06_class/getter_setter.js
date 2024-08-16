//
//Getter and setter helps to make the parameter checks only once rather than checking always when the param use
//
var Person = /** @class */ (function () {
    function Person(name, age, lastName) {
        this.name = name;
        this.lastName = lastName;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "getAge", {
        get: function () {
            return this._age;
        },
        set: function (ageNum) {
            if (ageNum <= 0 || ageNum >= 200) {
                throw new Error("The age is invalid");
            }
            this._age = ageNum;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var ayush = new Person("Ayush", 19, "Agrawal");
ayush.getAge = 19.6; // not calling it as a method
console.log(ayush.name);
