// 2.	Напишите функцию выводящую множители положительного целого числа. На вход дается число, вывод массив множителей.

function arrOfMultipliers(num){
    let result = [];
    for(let i = 1; i < num**0.5; i++){
        if(num % i === 0){
            result.push(i, num / i);
        }
    }
    return result
};

console.log(arrOfMultipliers(100));