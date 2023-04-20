// 2. Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. 
// Первое значение - ключ, второе - значение.
// [['a', 1], ['b', 2]] => { a: 1, b: 2 }

function fromArrToObj(arr){
    const result = {};
    for(const [key, value] of arr){
        result[key] = value;
    }
    return result;
};

const arr = [['a', 1], ['b', 2]];
console.log(fromArrToObj(arr));