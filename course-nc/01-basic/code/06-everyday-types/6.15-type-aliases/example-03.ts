
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
// Le damos formato tipo email a la prop format01
type EmailFormat = {
    format: `${string}@${string}.${string}`
}

function createEmail(email: EmailFormat): EmailFormat {
    
    const { format } = email

    return {
        format
    }
}

const email1 = createEmail({format: 'andresganc@gmail.com'})
console.log(email1)





