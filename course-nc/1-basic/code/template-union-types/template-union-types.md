
# TEMPLATE UNION TYPES

    - Las template union types son formas de hacer tipos unidos con el simbolo ``

    Example: 

        type ColorHex = `#${string}`

        type Email = `${string}@${string}.${string}`
        
        type Hexadecimal = `${string}-${string}-${string}-${string}-${string}`