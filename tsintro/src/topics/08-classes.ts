
export class Person {

    constructor(
        public name: string,
        private address: string
    ) {}
}

const ironman = new Person("Daniel", "01057");

console.log({ironman});


export {};