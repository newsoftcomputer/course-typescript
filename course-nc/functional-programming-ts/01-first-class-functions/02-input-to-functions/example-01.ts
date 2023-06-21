
// LAS FUNCIONES PUEDEN RECIBIR ORAS FUNCIONES

// Adaptado de la presentacion de Anjana Vakil
// Learning Funcional Programing with Javascript
// @ JSUncof 2016
// https://youtu.be/e-5obm1G_FY?t=9m24s


let arrayCustomers = [
    { id: 1, name: 'Marco', status: 'active' },
    { id: 2, name: 'Mariana', status: 'active' },
    { id: 3, name: 'Daniela', status: 'active' },
    { id: 4, name: 'Alejandra', status: 'active' },
    { id: 5, name: 'Andres', status: 'active' },
    { id: 6, name: 'Pepito', status: 'inactive' },
]

// Example 1
const activeCustomers1 = arrayCustomers.filter(function (arrayCustomer) {
    return arrayCustomer.status === 'active'
})

console.table(activeCustomers1)


// Example 2 - Function Optimized
function isCustomerActive(arrayCustomer) {
    return arrayCustomer.status === 'active'
}

const activeCustomers2 = arrayCustomers.filter(isCustomerActive)

console.table(activeCustomers2)


// Example 3 Arrow Function Optimized
const statusActive = (arrayCustomer) => arrayCustomer.status === 'active'

const activeCustomers3 = arrayCustomers.filter(statusActive)

console.table(activeCustomers3)