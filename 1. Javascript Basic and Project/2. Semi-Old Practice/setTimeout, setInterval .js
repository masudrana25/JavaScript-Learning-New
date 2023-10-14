// 1
/*
function doSomething() {
  console.log(5555);
}

console.log(33333);
console.log(44444);

setTimeout(doSomething); // aikhan a just function call korty hby, kono input diye call kora jby na
 // hatey joto kaj achy sob kaj sess korey ai function er kaj korby.

console.log(66666);
console.log(77777);
*/

//2
/*
function doSomething() {
  console.log(5555);
}

console.log(33333);
console.log(44444);

setTimeout(doSomething, 5000);// aikhan a just function call korty hby, kono input diye call kora jby na

 // hatey joto kaj achy sob kaj sess korey ai function er kaj korby 5000ms/5s por. 5s er por korby kaj ta, agy na. but 5s er aro onk poreo hotey parey, depending j tar hatey aro koto gula kaj baki achy.

console.log(66666);
console.log(77777);
*/

// 3
/*
function doSomething() {
  console.log(5555);
}

console.log(33333);
console.log(44444);

//setTimeout == is a function
setTimeout(function () {
  console.log('lazy and wait........'); // 5s por last a sob kaj sess kore ai kaj ta korby
}, 5000);

 // hatey joto kaj achy sob kaj sess korey ai function er kaj korby 5000ms/5s por. 5s er por korby kaj ta, agy na. but 5s er aro onk poreo hotey parey, depending j tar hatey aro koto gula kaj baki achy.

console.log(66666);
console.log(77777);
*/

// 4 = setInterval
/*
function doSomething() {
  console.log(5555);
}

console.log(33333);
console.log(44444);

//setTimeout == is a function
setInterval(function () {
  console.log('lazy and wait........'); // 5s por last a sob kaj sess kore ai kaj ta korby and 5s por por same kaj continue korby.
}, 5000);



console.log(66666);
console.log(77777);

*/

