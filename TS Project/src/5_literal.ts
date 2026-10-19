// union type --> type1 | type 2 ...
// intersection --> type1 & type 2
// type alias
// literal type

let age: number | string = 22;
age = "not provided"
// age = false // error

type Person = {
    name: string,
    age: number
}

type Faculty = {
    skills: string[],
    batches: string[]
}

let yasir : Person & Faculty = {
    name: "Muhammad Yasir",
    age: 21,
    skills: ["JS", "C#", "ASP.NET"],
    batches: ["2309C1", "2309C2", "2309E1"]
}


type Direction = "North" | "East" | "West" | "South"
type Dice = 1 | 2 | 3 | 4 | 5 | 6

let shipDir1 : Direction = "South"
// let shipDir2 : Direction = "Up" // error

let diceface : Dice = 4