
// by using for loop

/*
function factorial_of(n) {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var factorial_of_10 = factorial_of(10);
console.log(factorial_of_10);
*/

// by using while loop

function factorial_of(n){
    var i=1;
    var factorial=1;
    while(i<=n){
        factorial=factorial*i;
        i++;
    }
    return factorial;
}
    var factorial_of_8=factorial_of(8);
    console.log(factorial_of_8);