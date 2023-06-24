
// El type alias se puede usar para darle formato a un tipo

// Example 01
type HexadecimalFormat = {
    // Le damos formato tipo hexadeximal a la prop format01
    format: `${string}-${string}-${string}-${string}-${string}`
}

function createHexadecimal(hex: HexadecimalFormat): HexadecimalFormat {

    const { format } = hex
    
    return {
        format: crypto.randomUUID()
    }
}

console.log(createHexadecimal)


// Example 02
type EmailFormat = {
    // Le damos formato tipo email a la prop format01
    format?: `${string}@${string}.${string}`
}

function createEmail(e: EmailFormat): EmailFormat {

    const { format } = e
    
    return {
        format
    }
}

// let email01: EmailFormat = 'andresganc@gmail.com'
console.log(createEmail('andresganc@gmail.com'))





