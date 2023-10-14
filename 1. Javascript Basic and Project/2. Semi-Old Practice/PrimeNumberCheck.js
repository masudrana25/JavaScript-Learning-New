//Prime Number check by For loop
function PrimeNumberCheck(n) {
    for (let i = 2; i < n; i++){
        var reminder = n %i;
        if (reminder==0) {
           return 'not prime';
        }
    }
   return 'prime';
 }
var aaa = PrimeNumberCheck(5);
console.log(aaa);

// Prime Number check by While Loop

function primeCheck(num) {
    var i=2;
    while (i<num) {
      var reminder = num%i;
     if (reminder==0) {
        return 'not prime';
     }   
     else{
        i=i+1;
     }
    }
    return 'prime';
}
var a = primeCheck(15);
console.log(a);