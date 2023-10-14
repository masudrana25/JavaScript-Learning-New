
//fibonacchi number= j number ta hobey tar ager duiti number ar jogfol

// fibonacchi series

function fibonacchi_series(n) {
    var M = [0, 1];
    for (var i = 2; i <= n; i++) {
        M[i] = M[i - 1] + M[i - 2];
    }
    return M;
}

var fibonacchi = fibonacchi_series(20);
console.log(fibonacchi);

// fibonacchi element

function fibonacchi(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    else{
        return fibonacchi(n-1)+fibonacchi(n-2);
    }
}
var result=fibonacchi(10);
console.log(result);



