// решетка 8х8

let char1 = '#';
let char2 = ' ';
let length = 8;
let line = '';
for(i = 0; i < length * (length + 1); i++){
    if(i % (length + 1) === 0){
        line += '\n';
    }
    else if(i % 2 === 0){
        line += char2;
    }
    else{
        line += char1;
    }
};
console.log(line);