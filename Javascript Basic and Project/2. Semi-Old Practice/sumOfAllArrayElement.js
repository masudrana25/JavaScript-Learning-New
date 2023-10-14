//sum by loop
let Array2 = [1,2,3,4,5,6,7,8,9,1,0];
var sum = 0;
for (let i = 0; i < Array2.length; i++) {
    const element = Array2[i];
    sum = sum +element;
}
console.log('sum is = ',sum);

// sum by function
function SumFunction(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum = sum + element;
    }
    return sum;
}
let sum1 = SumFunction(Array2);
console.log('sum by function  is =  ',sum1);
let sum2 = SumFunction([1,2,3,4,5,6,7,8,9,1,0]);
console.log('sum by function2  is =  ',sum2);