
# INDEXED ACCESS TYPES

    - We can use an indexed access type to look up a specific property on another type
    - doc: https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content

    Example:

        type Person = { age: number; name: string; alive: boolean };
        type Age = Person["age"];