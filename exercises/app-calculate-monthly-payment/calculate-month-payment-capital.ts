
type FormatLoanValue = {
    formatLV: `$${number}`
}

interface ILoan {
    name: string
    lastName: string
    document: string
    loanValue: number
    interestsMonth: number
    dues: number
    duesValue: number
    isActive?: boolean
}


// Fun Create Loan
const createLoan = (loan: ILoan): ILoan  => {

    let { name, lastName, document, loanValue, interestsMonth, dues, duesValue, isActive } = loan

    return { name, lastName, document, loanValue, interestsMonth, dues, duesValue, isActive }

}

let cl = createLoan({ name: 'Andres', lastName: 'Giraldo', document: '94474361', loanValue: 2000000, interestsMonth: 3, dues: 24, duesValue: 100000, isActive: true })


// Fun Calculate Dues Month
const calculateValueInterestMoth = (cl: ILoan): number => {

    let valueInterestMoth: number
    
    let { loanValue, interestsMonth } = cl

    valueInterestMoth = loanValue * interestsMonth / 100

    return valueInterestMoth

}

// Fun Calculate Dues Month
const calculateDuesMothCapital = (value: number): number => {

    let { loanValue, interestsMonth, dues, duesValue } = cl

    let interestValueMoth: number = 0
    let valueLoanTemp: number
    let valueLoanCurrent: number = loanValue 
    let valueCapitalMonth: number = 0

    // Calculate Capital month
    for (let index = 0; index < dues; index++) {
        
        let duesMothTemp: number
        // const element = dues[index];
        valueLoanTemp = loanValue - interestValueMoth - duesValue
        valueLoanCurrent = valueLoanTemp - duesValue

        valueCapitalMonth = valueLoanCurrent   
        console.log(valueCapitalMonth)
        
    }
    
    // Calculate Interest Mont
    for (let index = 0; index < dues; index++) {
        interestValueMoth = valueLoanCurrent * interestsMonth / 100
        console.log(interestValueMoth)
    }

    return valueCapitalMonth

}

const createLoanCalculateDuesMoth = calculateDuesMothCapital(calculateValueInterestMoth(createLoan(cl)))

console.log(createLoanCalculateDuesMoth)





function calcularCuotasMensuales(prestamo, tasaInteres, plazo) {
    // Convertir la tasa de interés anual a mensual
    var tasaInteresMensual = tasaInteres / 12 / 100;
    
    // Calcular el número total de pagos
    var numPagos = plazo * 12;
    
    // Calcular el factor de amortización
    var factorAmortizacion = Math.pow(1 + tasaInteresMensual, numPagos) / (Math.pow(1 + tasaInteresMensual, numPagos) - 1);
    
    // Calcular la cuota mensual
    var cuotaMensual = prestamo * tasaInteresMensual * factorAmortizacion;
    
    return cuotaMensual.toFixed(2); // Redondear a 2 decimales
  }
  
  // Ejemplo de uso
  var prestamo = 100000; // Monto del préstamo
  var tasaInteres = 8; // Tasa de interés anual (%)
  var plazo = 1; // Plazo del préstamo en años
  
  var cuotaMensual = calcularCuotasMensuales(prestamo, tasaInteres, plazo);
  console.log("La cuota mensual es: " + cuotaMensual);



