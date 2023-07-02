
# TYPE FROM RETURN FUNCTION

    - Type return function lo que hace es convertir un return de una funcion en un tipo

    Example:

        function createAddress() {
            return {
                planet: 'Earth',
                city: 'Atlanta'
            }
        }

        type Address = ReturnType<typeof createAddress>