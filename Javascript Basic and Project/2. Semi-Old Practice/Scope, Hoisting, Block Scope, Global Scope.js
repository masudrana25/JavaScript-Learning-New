// Scope == 

// Hoisting == "var" diye kono variable declared korley seita k akta level uporeo available pouya jai, call korley pauya jai. faction er khetrey

// Block Scope ==  "let", "const" aigulo diye kono variable declared korley sei jaigar moddhey e oi varibale k paouya jaby. bairey kothao oi variable k call korley pauya jaby na , bises korey function er bairey pauya jaby na function er vitorer varibale k 

// Global Scope == function er bairey declared kora variable k j kono jaiga thekey call kora and use kora jai, function er vitoreo call and use kora jai.   

const num1 = 35; // global variable

function add(num2,num3) {
    const sum = num2 + num3; // sum, num2, num3 block scope variable, ai gula k ai function er bairey kothao call korley paouya jaby na.
    return sum;
}

console.log(add(2,3));

function summation(num4,num5) {
    if (num4>0) {
        var sum = num4 + num5;
    }
    console.log(sum); // Hoisting == ager loop er sum k looper bairye call korey use kora jaby, but ai function er vairey use kora jaby na.
    return sum;
}
 
console.log(summation(5,6));


