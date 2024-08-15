// union `|` will accept both the data type 
let data: number | string

data = 1
data = "1"

let getData = (id: string | number) => {
    console.log(id)
}

// we can also use `|` in two different custom types

type userDet = {
    name : string
    id : number
}
type userDet2 = {
    userName : string
    id : number
}

let getUserId = (u : userDet | userDet2) : userDet | userDet2 => {
    return u
}

let myUser = { userName : "string", id : 1 }

// when there we want to perform operation on specific data type

let userId = (id : string | number) => {
    if (typeof id === "string"){id.toLowerCase()}
}

// array 

// const array0: string | number[]  = ["1", 2, "3"] this is the wrong way use parenthesis
const array0: (string | number)[]  = ["1", 2, "3"]

// To make some variable permanent to some `data` 

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew" 
// (cannot be set to crew becz only 3 value is accepted)

export {}