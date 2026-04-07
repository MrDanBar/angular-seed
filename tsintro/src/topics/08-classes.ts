
export class Person {

    constructor(
        public name: string,
        private address: string
    ) {}
}

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        name: string,
        address: string
    ) {
        super(name, address);
    }
}

const ironman = new Hero("IronMan", 39, "Daniel", "01057");
const spiderMan = new Hero("SpiderMan", 18, "Peter", "01001");

console.table({ironman, spiderMan});


export {};