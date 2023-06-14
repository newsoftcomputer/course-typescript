
// any
        /*  En algunas situaciones, no todo el tipo de información está disponible o 
            su declaración requeriría un esfuerzo inadecuado. 
            Estos pueden ocurrir para valores de código que se ha escrito sin TypeScript o una biblioteca de terceros. 
            En estos casos, es posible que deseemos excluirnos de la verificación de tipos. 
            Para hacerlo, etiquetamos estos valores con cualquier tipo:
        */
            let any1: any
            any1 = 'Giraldo'
            any1 = 42
            console.log(any1)