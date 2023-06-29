
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

// Fun Calculate Dues Month
const calculateValueInterestMoth = (cl: ILoan): number => {

    let valueInterestMoth: number
    
    let { loanValue, interestsMonth } = cl

    valueInterestMoth = loanValue * interestsMonth / 100

    return valueInterestMoth

}

// Fun Calculate Dues Month
const calculateDuesMothCapital = (cl: ILoan): number => {

    let duesMoth: number
    
    let { loanValue, interestsMonth, dues, duesValue } = cl

    // Calculate inter Month
    duesMoth = loanValue * interestsMonth / 100

    return duesMoth

}

let cl = createLoan({ name: 'Andres', lastName: 'Giraldo', document: '94474361', loanValue: 2000000, interestsMonth: 3, dues: 24, duesValue: 100000, isActive: true })

const createLoanCalculateDuesMoth = calculateValueInterestMoth(createLoan(cl))

console.log(createLoanCalculateDuesMoth)