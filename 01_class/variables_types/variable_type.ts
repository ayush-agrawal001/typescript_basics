// string type
let greetings : string = "Hello, Ayush!" // set to strings and only take strings
console.log(greetings)  

// number type (can be int or float)
let num : number = 1 // set to numbers and only take integers

// if we are already giving a value of str or num there is no nee to specify the type
// as typescript will already specify it with the data you set the variable to

let num_2 = 2 // this is a number type

console.log(num_2.toExponential(2));

//any (ideally should not be used)

let hero; //automatically `any` type is assigned

function getHero(){
    return "thor"
}

hero = getHero()


export {} // to avoid (cannot declare block scope variable)