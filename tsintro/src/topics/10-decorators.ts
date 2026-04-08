
function classDecorator<T extends { new (...args: any[]) : {}}>(
    constructor: T
) {
    return class extends constructor {
        anotherProperty = 'a';
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'abc123';

    print() {
        console.log('Hola Mundo');
    }
}

console.log(SuperClass);

const myVar = new SuperClass();

console.info(myVar)