// const arrays = []

// arrays.push(1) 
//The above method will give you an error as its type is set to never

const arrays0 : string[] = []

arrays0.push("Ayush")

// const arrays1 : number[] = []
const arrays1 : Array<number> = [] // same as the above syntax


arrays1.push(1, 2, 3)

//
//If we have objects and arrays in arrays
//

//Object in array
type User = {
    name : string
    email : string
}

const userDetail: User[] = []

userDetail.push({ name : "Ayush",email : "a@a.com" })

//Arrays in array

const aia: number[][] = [[1,2,3], [4,5,6]]

aia.push([7,8,9])

export {}