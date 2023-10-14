//Factorials By For Loop
function FactorialCalculate(Number) {
    var Factorial = 1;
    for (let i = 1; i <= Number; i++){
       
        Factorial = Factorial*i;
        
    }
    return Factorial;
}
console.log(FactorialCalculate(3));
console.log(FactorialCalculate(4));
console.log(FactorialCalculate(5));
console.log(FactorialCalculate(6));

////Factorials By While Loop

function FactorialCalculate2(number) {
    Factorial = 1;
    i=1;
    while (i<=number) {
        Factorial = Factorial *i;
        i=i+1;
    }
    return Factorial;
}
console.log(FactorialCalculate2(3));
console.log(FactorialCalculate2(4));
console.log(FactorialCalculate2(5));
console.log(FactorialCalculate2(6));

//