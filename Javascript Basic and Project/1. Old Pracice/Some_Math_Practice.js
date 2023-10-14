
// Time 

var a=new Date ();
var b= new Date('1971-12-16');
console.log(a)
console.log(b)



//sum,substraction, multiplication, division, reminder

var price1=45;
var price2=35;
var sum_of_price=price1+price2;
var substraction_of_price=price1-price2;
var multiplication_of_price=price1*price2;
var division_of_price=price1/price2;
var reminder_of_price=price1%price2;
console.log(sum_of_price, substraction_of_price, multiplication_of_price,division_of_price, reminder_of_price)

//mode

var a=-5;
var mode_a= Math.abs(a); // give the absolute value of a
console.log(mode_a)

//round,floor,ceil 

var a=5.5567;
var b=5.3467;
var c=5.09;
var d=5.099;
var round_a= Math.round(a);
var round_b= Math.round(b); // round the value with law, if the next number is greater than 5,then increase 1 or if the next number is less than 1, then decrease 1.

var ceil_c= Math.ceil(c); // increase the value 1
var floor_d=Math.floor(d); // decrease the value 1
console.log(round_a,round_b,ceil_c,floor_d)


// Random Number

var a=Math.random(); // a is any random number between 0 and 1 which change in every click
console.log(a)

// if we want to find any random number between 0 t0 100, then the code will be as follow:
var b=Math.random()*100;
var round_b=Math.round(b);
console.log(round_b)




