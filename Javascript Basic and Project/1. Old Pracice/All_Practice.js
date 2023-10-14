
//Array Slice 
var Name=['Abdul Alim','Masud','Sabbir','Ibrahim','Naim','Naema'];
var partOfName1=Name.slice(2,3);
var partOfName2=Name.slice(2,5);
console.log(partOfName1);
console.log(partOfName2);

// Array One Element slice
var Name=['Abdul Alim','Masud','Sabbir','Ibrahim','Naim','Naema'];
var partOfName1=Name[3];
console.log(partOfName1);

// // Round, Floor, Ceil value
a=2.45;
b=2.55;

round_Value1=Math.round(a);
round_Value2=Math.round(b);
floor_value=Math.floor(a);
ceil_value=Math.ceil(a);

console.log('round value of ' +a+' is = '+round_Value1);
console.log('round value of ' +b+' is = '+round_Value1);
console.log('floor value of ' +a+' is = '+floor_value);
console.log('ceil value of ' +a+' is = '+ceil_value);


//Take Random Value
for(var i=1; i<=10; i++){
    var x=Math.random() * 10;
    var y=Math.round(x);
    console.log(y);
}

// 1. Maximum Find
a=24;
b=16
c=8;
if (a>b) {
    if (a>c) {
        console.log('Max is a = '+a);
    }else{
        console.log('Max is c = '+c);
    }
}else{
    if (b>c) {
        console.log('Max is b = '+b);
    }else{
        console.log('Max is c = '+c);
    }
}

// 2. Maximum Find
a=24;
b=16
c=8;
maximum_number=Math.max(a,b,c);
console.log('Maximum is = '+maximum_number);


// 1. minimum Find
a=24;
b=16;
c=8;
if (a<b) {
    if (a<c) {
        console.log('Min is a = '+a);
    }else{
        console.log('min is c = '+c);
    }
}else{
    if (b<c) {
        console.log('min is b = '+b);
    }else{
        console.log('min is c = '+c);
    }
}

// 2. minimum Find
a=24;
b=16;
c=8;
minimum_number=Math.min(a,b,c);
console.log('minimum is = '+minimum_number);


//Maximum element of Array
a=[1,22,5,66,77,99,0,44];

max=a[0];

for(var i=1; i<a.length; i++){
    Array_element=a[i];
    if (max < Array_element) {
        max=Array_element;
    }
}
console.log('Maximum element of this Array is = ', max);

//minimum element of Array
a=[1,22,5,66,77,99,0,44];

min=a[0];

for(var i=1; i<a.length; i++){
    Array_element=a[i];
    if (min > Array_element) {
        min=Array_element;
    }
}
console.log('minimum element of this Array is = ', min);


//Summation element of Array
a=[1,22,5,66,77,99,0,44];

sum=0;

for(var i=0; i<a.length; i++){
    sum=sum + a[i];
}
console.log('minimum element of this Array is = ', sum);

//Unique Array and delete duplicate value
a=[1,22,5,66,77,22,5,66,0,99,0,44];

uniqueArray=[];

for(var i=0; i<a.length; i++){
    array_Element=a[i];
    position=uniqueArray.indexOf(array_Element);
    if (position==-1) {
        uniqueArray.push(array_Element);
    }
}
console.log('The Unique Array is = ', uniqueArray);

//The Maximum lengthy word in a array
a=['masud','Abdul Alim','Sabbir','Jubaer','Firdous','Amm'];

Maximum_lengthy_word=a[0];

for(var i=0; i<a.length; i++){
    array_Element=a[i];
    Number_of_Letter=array_Element.length;
    if (Number_of_Letter>Maximum_lengthy_word.length) {
        Maximum_lengthy_word=array_Element;
    }
}
console.log('The Maximum lengthy word in this Array is = ', Maximum_lengthy_word);


//Word Count in a paragraph or sentence
a='I am   Masud  Rana      who is trying to reach the Javascript language basic part.';

count_word=0;

for(var i=0; i<a.length; i++){
    latter=a[i];
    if (latter==" " && a[i-1]!=" ") {
        count_word++;
    }
}
count_word++;// last ar word ta count korer jonno..
console.log('Total word in this paragraph is = ',count_word);

//Make the Sentence Reverse

function Reverse(Input_Sentence) {
    Reverse_Sentence = "";

    for (var i = 0; i < Input_Sentence.length; i++) {
        latter = Input_Sentence[i];
        Reverse_Sentence = latter + Reverse_Sentence;
    }
    return Reverse_Sentence
}
Input_Sentence=Reverse('I am   Masud Rana.')
console.log('Reverse Sentence is = ', Input_Sentence);







//Inch to Feet Convert function

function InToFeet(inch){
    var feet=inch/12;
    return feet;
}
var b=[122,222,322];
var a=InToFeet(12);
var c=InToFeet(b[0]);
var d=InToFeet(b[1]);
var e=InToFeet(b[0]);
console.log(a);
console.log(c);
console.log(d);
console.log(e);

// Laep Year Check
function CheckLeapYear(year){
    if ((year%4==0) && (year%100!=0) || (year%400==0)) {
        console.log(year+' is a Leap year');
    }else{
        console.log(year+' is not a Leap year');
    }
}

const aaa=2000;
const aaaaaa=CheckLeapYear(aaa);

//Factorial of any Number by using For Loop
function factorial(num){
    var factor=1;
    for(var i=1; i<=num;i++){
        factor=factor*i;
    }
    return factor;
}

var factorialOf5=factorial(5);
console.log(factorialOf5);

//Factorial of any Number by unsing While Loop
function factorial(num){
    var factor=1;
    var i=1;
    while(i<=num){
        factor=factor*i;
        i++;
    }
    return factor;
}
var factorialOf5=factorial(5);
console.log(factorialOf5);

//Factorial of any Number by unsing Recursive Function
function factorial(n){
    if(n==0){
        return 1;
    }else{
        return n* factorial(n-1);
    }
}
var result=factorial(5);
console.log(result);

//Fibonacchi Number Series Create by For Loop
var Fibbo=[0,1];

function fibonacchi_Number(n){
    for(var i=2; i<=n; i++){
        Fibbo[i]=Fibbo[i-1]+Fibbo[i-2];
    }
    return Fibbo;
}
var result=fibonacchi_Number(10);
console.log(result);

//Fibonacchi Number n-th value by Recursive way
function fibonacchi_Number(n){
    if (n==0) {
        return 0;
    }
    if (n==1) {
        return 1;
    }else{
        return fibonacchi_Number(n-1)+fibonacchi_Number(n-2);
    }
}
var result=fibonacchi_Number(10);
console.log(result);

//Fibonacchi Number Series Create by Recursive Function 
function fibonacchi_Number(n){
    if (n==0) {
        return [0];
    }
    if (n==1) {
        return [0,1];
    }else{
        var fibbo=fibonacchi_Number(n-1);
        var NextElement=fibbo[n-1]+fibbo[n-2];
        fibbo.push(NextElement);
        return fibbo;
    }
}
var result=fibonacchi_Number(10);
console.log(result);

// Check Prime Number by if loop
function primeCheck(n){
    var i=2;
    if (n==2) {
        console.log('This is a Prime Number');
    }
    if(i<n) {
        var a = n%i;
        if (a==0) {
            console.log('This is not a Prime Number');
        }else{
            i++;
        }
    }
    console.log('This is a Prime Number')
}
var checkkk=primeCheck(10);
var checkkk=primeCheck(17);
var checkkk=primeCheck(2);
var checkkk=primeCheck(7);

// Check Prime Number by For loop
function primeCheck(n){
    for(var i=2; i<n;i++){
        var reminder=n%2;
        if (reminder==0) {
            console.log('Not Prime');
            break;
        }
    }
console.log('Prime');
}
var checkkk=primeCheck(7);
var checkkk=primeCheck(10);
var checkkk=primeCheck(17);

//





