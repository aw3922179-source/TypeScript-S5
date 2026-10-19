// type Employee =  {
//     id: number,
//     name: string,
//     email: string
//     info: () => void
// }
let employee1 = {
    id: 1,
    name: "Saad",
    email: "saad@gamil.com",
    info() {
        console.log("The name is " + this.name);
    },
};
let employee2 = {
    id: 2,
    name: "Ayaaan",
    email: "ayan@gamil.com",
    info() {
        console.log("The name is " + this.name);
    },
};
employee1.info();
employee2.info();
export {};
