//
// Making the arguments to be specific data type
//
function contacts( name : string, email : string, isPaid : boolean){
    // We need to specify the types if no all var would be assigned to any data type but 
    // its not a good practice

    console.log(`${name} ${email} ${isPaid}`);   
}

contacts("Ayush", "a@a.com", true) 

// In arrow function 

let contacts_2 = ( name : string, email : string, isPaid : boolean) => {
    console.log(`${name} ${email} ${isPaid}`);   
}

//
//Making the function output to specific type
//

let getValue = (num : number): number => {
    console.log(num);
    return num
}

// if there is no return use `void`
let consoleVal = (num : number) : void => {//used void as no return
    console.log(num);
}

//to throw error or terminste the programm use `never`
let errThrow = (err : string) : never => {
    throw err 
}

// for arrays

let heros = ["thor", "ironman", "spiderman"]

heros.map((hero): void => { //(hero: string) is not needed as the ts already did it through arrays
    console.log(hero);
})





export {}