const city: string = 'dhaka';

const fruit: string[] = ['mongo', 'banana', 'apple']

type person = { name: string, salary: number, id: number };


const student: person = {
    name: 'md joshim',
    salary: 12000,
    id: 12
}

const employee: person = {
    name: 'nanana',
    salary: 222,
    id: 33
}

function addd(num1: number, num2: number): number {
    return num1 + num2;
}

const adddiytion = (num1: number, num2: number): number => num1 + num2;

const doMath = (num1: number, num2: number): void => {

}

interface player {
    name: string,
    salary: number,
    wife?: string,
    previousClub: string[]
}

const messy: player = {
    name: 'l messi',
    salary: 111,
    previousClub: ['psg', 'fff']

}

const hanna: player = {
    name: 'saifur',
    salary: 122,
    previousClub: ['ee', 'eee', 'ddddddd'],
    wife: 'sasaa'
}

interface employee11 {
    name: string,
    salary: number
}

interface developer extends employee11 {
    language: string,
    typeSpeed: number
}

const pabon: developer = {
    language: 'js',
    typeSpeed: 22,
    name: 'pobon chawy',
    salary: 22
}

class Car {
    model: string;
    price: number
    constructor(model: string, price: number) {
        this.model = model,
            this.price = price

    }

    getTotalPrice(tax: number): number {
        const total = this.price * tax;
        return total;
    }
}

const cae1 = new Car('toyata', 2222);
const p1 = cae1.getTotalPrice(666);