"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "Jaipur"; // cant even read it or modify it
        this.email = email;
        this.name = name;
    }
    return User;
}());
var variable = new User("a@a.com", "Ayush");
// variable.city = "raipur" (cannot set to different data as readonly)
// variable.city (cannot even access data as private)
var User2 = /** @class */ (function () {
    function User2(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Jaipur"; // cant even read it or modify it
    }
    return User2;
}());
