// 6!=5!*6

function FactorialRecursive(number) {
    if (number==0) {
        return 1;
    }
    else{
        return number * FactorialRecursive(number-1);
    }
}

console.log(FactorialRecursive(3));
console.log(FactorialRecursive(4));
console.log(FactorialRecursive(5));
console.log(FactorialRecursive(6));
