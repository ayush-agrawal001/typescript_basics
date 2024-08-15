const User = {
    name : "Ayush",
    email: "a@a.com",
    isActive : true 
}

//When there is object as a parameter of function
let createUser = ( {name : string, isPaid : boolean} ) => {}

createUser( {name : "Ayush", isPaid : true} )


//When we need to return an object and specify the return data type

let createCource = () : {name : string, price : number} => {
    return {name : "Next.js" , price : 399 }
}

// `Type Aliases`

type Users = {
    name : string;
    email : string;
    isActive : boolean;
}

let createUser2 = (usedBy : Users) : Users  => { // like how we done this in above examples
    return {name : usedBy.name , email : usedBy.email, isActive : usedBy.isActive }
}

createUser2({name : "" , email : "", isActive : false })

// Using READONLY, `?` for optional and `&` for joining to type aliases

type Users2 = {
    readonly _id : string; // so that it cannot mutate
    name : string;
    email : string;
    isActive : boolean;
    cardNumber ? : string; // using `?` to make the ts know that this is optional 
}

let createUser3 = (u : Users2) : Users2 => { return u }

createUser3({_id : "string", name : "string", email : "string", isActive : true }) //now i cannot change _id further


type cardCvv = {num : number}
type cardName = {name : string}

type cardDetails = cardCvv & cardName & {
    userName : string
}

export {}