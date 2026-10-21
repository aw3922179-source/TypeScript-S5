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
        console.log("Id :" + this.id);
        console.log("Name :" + this.name);
        console.log("Email :" + this.email);
    },
};
let employee2 = {
    id: 2,
    name: "Ayaaan",
    info() {
        console.log("Id :" + this.id);
        console.log("Name :" + this.name);
    },
};
employee1.info();
employee2.info();
// employee1.id = 3 // error
employee1.name = "Muhammad Saad";
employee1.info();
export {};
