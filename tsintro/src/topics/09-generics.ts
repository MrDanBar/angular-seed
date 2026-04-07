
export function whatsMyType<T>(argument: T): T {
    return argument;
}

let amIString = whatsMyType('Hola mundo');
let amINumber = whatsMyType(1);
let amIArray = whatsMyType([1, 2, 3, 4]);

console.log(amIString.split(' '))
console.log(amINumber.toFixed())
console.log(amIArray.join('-'))