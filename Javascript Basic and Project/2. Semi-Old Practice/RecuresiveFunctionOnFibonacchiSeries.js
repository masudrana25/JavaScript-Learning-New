function FibonacchiSeries(n) {
    if (n==0) {
        return [0];
    }
    else if (n==1) {
        return [0,1];
    }
    else{
        var oldSeries = FibonacchiSeries(n-1);
        var NextElement = oldSeries[n-1]+oldSeries[n-2];
        oldSeries.push(NextElement);
    }
 return oldSeries;
}
console.log(FibonacchiSeries(10));