let a=2; b=3;c=4;

//maximum find
if (a>b && a>c) {
    console.log('a is max');
}
else if(b>a && b>c){
    console.log('b is max');
}
else{
    console.log('c is max');
}

let maxValue = Math.max(a,b,c);
console.log('maximum value by Math.max function is = ',maxValue);

//minimum find

if (a<b && a<c) {
    console.log('a is min');
}
else if(b<a && b<c){
    console.log('b is min');
}
else{
    console.log('c is min');
}
let minValue = Math.min(a,b,c);
console.log('minimum value by Math.min function is = ',minValue);

//Max find from Array
let Array1 = [1,2,11,3,5,6,7,8,9];
let maxElement = Array1[0];
for (let i = 0; i < Array1.length; i++) {
    const element = Array1[i];
    if (element>maxElement) {
        maxElement = element;
    } 
}


console.log('Max element of this array is = ',maxElement)

// maxElement2 = Math.max(Array1);
// console.log('max from Math.max is = ',maxElement2);