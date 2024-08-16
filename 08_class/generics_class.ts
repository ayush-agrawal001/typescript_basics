//
//Using Generics in projects
//

// passing two values in a function 

interface DB {
    name : string
    num : number
}

function someFunctions<T, U extends DB >(arg1 : T, arg2 : U) : Object {
    return {
        arg1,
        arg2
    }
}

// class type in Generics

interface Quiz {
    name : string
    num : number
}

interface subject {
    name : string
    num : number
}

class Sellable<T> {
    public cart : T[] = []

    adddtocart(product : T){
        this.cart.push(product)
    }
}