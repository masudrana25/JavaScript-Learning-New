var Series = [0,1];
for (let i = 2; i < 10; i++) {
    var element = Series[i-1]+Series[i-2];
    Series[i]=element;
}
console.log(Series);