
# TYPE ALIAS

    - Los types alias sirven para crear tipos propios
    - Se deben declarar con Pascal Case (Primeras letras de palabra en mayuscula ej1: Color, ej2: ColorHexadecimal)

    Examples

        type Color = `#${string}`
        const hexadeximalColor: Color = '#651651' 

        type HexadeximalFormat = `${string}-${string}-${string}-${string}-${string}`

        type Email = `${string}@${string}.${string}

        type LoginCredentials1 = {
            username: string,
            password: string
        }