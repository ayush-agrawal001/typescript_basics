//
//Getter and setter helps to make the parameter checks only once rather than checking always when the param use
//
class Person {
    private _age : number
    protected height : number //protected is same as private but can access in inherent class 
    constructor(
    
        public name: string,
        age : number,
        public lastName : string
    
    ) {this._age = age}

    get getAge(){ // getting the age and returning the value of the property’s value 
        return this._age
    }

    set getAge(ageNum : number){ // setter method updates the property’s value
        if (ageNum <= 0 || ageNum >= 200){
            throw new Error("The age is invalid")
        }
        this._age = ageNum
    }
}

const ayush = new Person("Ayush", 19, "Agrawal")
ayush.getAge = 19.6 // not calling it as a method
console.log(ayush.name);

class physicalAppearence extends Person{
    logMe(){
        console.log(this.height);
    }
}
export {}