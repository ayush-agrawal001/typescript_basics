interface TakePhoto{
    cameraMode : string;
    filter : string;
    burst : number;
} 

interface story {
    createStory() : void
}

class Instagram implements TakePhoto, story { // implements the interface in class
    constructor (    
        public cameraMode : string,
        public filter : string,
        public burst : number // we cann add more paremeter but cannot do less then what TakePhoto asks for
    ){}
    createStory(): void {
        console.log("Created story");
    }
}

export {}