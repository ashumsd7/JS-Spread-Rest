// before spread operator 3 dots ... it is done via using apply() method

function sum(a,b,c){
    return a+b+c;
}

const numbers= [1,2,3];

console.log(sum.apply(null,numbers));

