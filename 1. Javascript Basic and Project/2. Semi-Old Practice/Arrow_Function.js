// Shortcut Function Declared/ Arrow function Declared:

// const fuctionName = variableName => FunctionalWorkingProcess;
// {{multiple line function a just return likty hoi, ak line function a return likhtey hoi na.}}

// For no input function
const output = () => 5;
console.log(output());

// for one input function
const output2 = num => num * 2;
console.log(output2(2));


// For two variable function:
const add = (x, y) => x + y;
console.log(add(2, 3));

// For more variable and Working Equation:
const doMath = (a, b) => {
    Sum = a + b;
    Sub = a - b;
    Result = Sum * Sub;
    return Result;
}
console.log(doMath(5,8));
