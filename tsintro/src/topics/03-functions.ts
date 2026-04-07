function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumbersArror = (a: number, b: number): string => {
    return `${ a + b }`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

const result: number = addNumbers(1, 3);
const result2: string = addNumbersArror(2, 3);
const result3: number = multiply(5);
const result4: number = multiply(5, 12);

console.log({result, result2, result3, result4});

interface Character {
    name: string,
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const duende: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`);
    },
}

console.log({ duende });
healCharacter(duende, 50)
duende.showHp();

interface SuperHero {
    name: string;
    hp: number;
    address: Address;
    showSkills: () => string;
}

interface Address {
    street: string;
    city: string;
}

const spider: SuperHero = {
    name: 'Peter',
    hp: 100,
    address: {
        street: '0100',
        city: 'NYC'
    },
    showSkills() {
        return `My address is ${ this.address.street + this.address.city }`
    },
}

console.log({ spider });
console.log(spider.showSkills());

spider.showSkills();

export {};