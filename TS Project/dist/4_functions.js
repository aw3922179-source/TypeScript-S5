function sum(num1, num2) {
    // return "Hello" // error
    // return true // error
    return num1 + num2;
}
console.log(sum(567, 45));
function calculateTax(income) {
    if (income < 50000) {
        return income * 0.12;
    }
    return income * 0.13;
}
let tax1 = calculateTax(40000);
let tax2 = calculateTax(60000);
console.log(tax1);
console.log(tax2);
export {};
