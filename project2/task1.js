// 1.	Напишите функцию, проверяющую является ли число простым или нет. На вход дается число, возвращается true/false.

function is_prime(num){
    if(num === 1){
        return false;
    }
    if(num === 2){
        return true;
    }
    for(let i = 2; i < num**0.5; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
};

console.log(is_prime(21));