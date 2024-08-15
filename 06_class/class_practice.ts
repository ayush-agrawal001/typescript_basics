class User {

    public email : string // in default it is public
    name : string
    private readonly city : string = "Jaipur" // cant even read it or modify it

    constructor (email : string, name : string ){
        this.email = email;
        this.name = name
    }
}

let variable = new User ("a@a.com", "Ayush")

// variable.city = "raipur" (cannot set to different data as readonly)
// variable.city (cannot even access data as private)


class User2 {

    private readonly city : string = "Jaipur" // cant even read it or modify it

    constructor (
        public email : string, 
        public name : string 
    ){
    }
}
// user2 is same as user but only difference is of syntax

export {}