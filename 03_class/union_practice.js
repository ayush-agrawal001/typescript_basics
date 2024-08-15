// union `|` will accept both the data type 
var data;
data = 1;
data = "1";
var getData = function (id) {
    console.log(id);
};
var getUserId = function (u) {
    return u;
};
var myUser = { userName: "string", id: 1 };
// when there we want to perform operation on specific data type
var userId = function (id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
};
// array 
// const array0: string | number[]  = ["1", 2, "3"] this is the wrong way use parenthesis
var array0 = ["1", 2, "3"];
// To make some variable permanent to some `data` 
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew" 
// (cannot be set to crew becz only 3 value is accepted)
