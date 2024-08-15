// When we want an array to be the specific data type according to the position
let userInfo: [string, number, boolean] = ['Ayush', 231, true]

userInfo[2] = false

let rgb: [number, number, number] = [255, 123, 121] // In this it will not take any more value then 0, 1, 2

rgb.push(2) //This is the loophole of tuples as i cannot directly assign the 3rd position no. but can push into the array

