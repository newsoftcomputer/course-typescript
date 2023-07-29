
# CLASSES

    - TypeScript offers full support for the class keyword introduced in ES2015.

    As with other JavaScript language features, TypeScript adds type annotations and other syntax to allow you to express relationships between classes and other types.


## Terminologia

    Clase
    Define las características del Objeto.

    Objeto
    Una instancia de una Clase.

    Propiedad
    Una característica del Objeto, como el color.

    Método
    Una capacidad del Objeto, como caminar.

    Constructor
    Es un método llamado en el momento de la creación de instancias.

    Herencia
    Una Clase puede heredar características de otra Clase.

    Encapsulamiento
    Una Clase sólo define las características del Objeto, un Método sólo define cómo se ejecuta el Método.

    Abstracción
    La conjunción de herencia compleja, métodos y propiedades que un objeto debe ser capaz de simular en un modelo de la realidad.

    Polimorfismo
    Diferentes Clases podrían definir el mismo método o propiedad.


## Sintaxis

    - Clase carro1 (Objeto carro1)

    Example:

        class classCarro1 {

            puertaColor: string;
            ruedasTamaño: string
            ventanas: string
            motor: number

            constructor(thePuertaColor: string, theRuedasTamaño: string, theVentanas: string, theMotor: number) {
                this.puertaColor = thePuertaColor;
                this.ruedasTamaño = theRuedasTamaño;
                this.ventanas = theVentanas;
                this.motor = theMotor;
            }    
            
            // Metodo
            arrancar(){
                // Codigo aqui
            }

            // Metodo con return
            acelerar(){
                // Codigo aqui
                return ("Velocidad : " );
            }

            // Metodo estaticos con return
            static frenar(){
                // Codigo aqui
            }
        }



// Instanciar la clase carro1 (Al instanciar la clase lo que hacemos es convertirlo en objeto)
let carro1 = new classCarro1('Rojo', 'Pequeñas', 'electricas', 1200);

carro1.puertaColor = "Azul";

console.log (`Carro 1 / Color puerta: ${carro1.puertaColor} - Ruedas: ${carro1.ruedasTamaño} - Ventanas: ${carro1.ventanas} - Motor: ${carro1.motor} cc`);