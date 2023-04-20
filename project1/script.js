let d = 7;
console.log(d);
console.log(d**2);
console.log(d**3);

let h = 5;
console.log(`h = ${h}`);
console.log(`h в квадрате = ${h**2}`);

let num1 = 3;
let num2 = 5;
console.log(`a * b = ${num1 * num2}`);
console.log(`a + b = ${num1 + num2}`);

let numbers = [1, 2, 3, 4, 5];
let len = arr => arr.length;
console.log(`Длина массива: ${len(numbers)}`);


let side1 = 3;
let side2 = 4;
let side3 = 5;
let paral = (a, b, c) => [2 * (a * b + a * c + b * c), a * b *c];
console.log(paral(side1, side2, side3));

