
interface Employee {
    firstName: string;
    lastName: string;
    //fullName(): string;
}

let employee: Employee = {
    firstName : "Name",
    lastName: "Last Name",
    // fullName(): string {
    //     return this.firstName + " " + this.lastName;
    // }
}

// employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'
employee.firstName = 'Jorge Andres' 
employee.lastName = 'Giraldo Arenas'

//console.log(employee.fullName())

function createEmployee(em: Employee) {

    const { firstName, lastName } = em;

    return `Employee created: ${firstName} ${lastName}`
}

console.log(createEmployee({firstName: 'Marco', lastName: 'Giraldo'}))

