//
// Abstract class can not create a new object but can be accessd in inheritence
// 
abstract class TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string,
        public burst : number
    ){}

    abstract createStory() : void
    getReel() : number{ return 8 }
} 

class Instagram extends TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string,
        public burst : number
    ){ 
        super(cameraMode, filter , burst)
    }

    createStory(): void {
        console.log("Created story");
    }
}

const a = new Instagram("test", "test", 9)

// TakePhoto.getReel() will not work as abstract class

a.getReel()

export {}