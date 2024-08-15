interface User {
    readonly id : number;
    name : string;
    email : string;
    googleId ?: string;
    // startTrial : () => string
    startTrial() : string //will make the output always a string same applys for above syntax
    getCoupon( couponName : string, offer : number ) : number
}

interface User  {
    githubToken? : string
} //reopening the interface and this is what make a difference between type and interface

interface Admin extends User {
    role : "admin" | "ta" | "student"
}// extended the user and made new interface Admin

const user00 : User = { // user can be removed and specifies to be Admin
    
    id : 123,
    name : "Ayush",
    email : "a@a.com",
    
    startTrial(){ return "Started" },

    getCoupon(name = "something", off = 10){ return off }
}
