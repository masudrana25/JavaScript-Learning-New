// function without any input variable 
// ai khetrey function ta kono variable er upor depent korbey na. sob somoi same kaj e korbey. 

function VariableIndependentFunction() {
    console.log('work done successfully');
}
VariableIndependentFunction();
VariableIndependentFunction();
// function with input variable 
// ai khetrey function ta variable er upor depent korbey. varibale er value onusarey function er kaj cholbey/hobey.

function VariableDependentFunction(age) {
    if (age<20) {
        console.log('You are not allowed to marry');
    }
    else if (age>40) {
        console.log('You are too old and thus you are not allowed to marry');
    }
   else{
    console.log('Congratulations!!! You got chance to marry now.');
   }
}
VariableDependentFunction(15);
VariableDependentFunction(25);
VariableDependentFunction(45);


// Function with Return

function Square(number) {
    var result = number * number;
    return result; //return na korley result er value ta function ar bairye jabey na . tai amra tokon ar bairey use korty parbo na result ar value ta k.
}

var SquareOf2 = Square(2);
var SquareOf10 = Square(10);
var SquareOf6 = Square(6);
console.log(SquareOf2,SquareOf6,SquareOf10);


// Function with Multiple input parameter

function summation(num1,num2) {
    var result = num1 + num2;
    return result;
}
var sum1 = summation(2,3);
var sum2 = summation(55,3);
var sum3 = summation(2,33);
console.log(sum1,sum2,sum3);