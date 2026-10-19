

function sum(num1: number, num2: number): number {

    // return "Hello" // error
    // return true // error

    return num1 + num2
}

console.log(sum(567, 45))

function calculateTax(income: number): number {

    if (income < 50_000) {
        return income * 0.12
    }
    return income * 0.13
}

let tax1 = calculateTax(40_000)
let tax2 = calculateTax(60_000)

console.log(tax1);
console.log(tax2);
