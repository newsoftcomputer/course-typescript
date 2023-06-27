
interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}

let employee: Employee = {
    firstName : "Email",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

// employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'
employee.firstName = 'Andres Giraldo' 

console.log(employee.fullName())