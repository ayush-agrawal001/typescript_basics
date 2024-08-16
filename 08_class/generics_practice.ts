//
// Generics helps in making the same type of data all through consistently
// 

const array1: Array<string> = [] //we previously see this type of generics

//
//In functions
//

let identity0 = (args : string | number): string | number => {
    return args
}// this may give a prblm by returning a number when given string

let identity1 = (args : any): any => {
    return args
}// this may give a prblm by returning any form when given a different form of data

let identity2 = <Type> (args : Type): Type => {
    return args
}// this will help in maintainning the data type and returning the same data type

function identity3<Type> (args : Type): Type{
    return args
}// function syntax

interface mydata{
    name : string;
    num : number
}

function identity4<mydata> (args : mydata): mydata{
    return args
}// customise types

// When using an array data type in a function

let identityArr = <T ,> (args : T[]) : T=> {
    return args[0]
}   // taking array as an argument and returning T data type you can also return T[]

export {}