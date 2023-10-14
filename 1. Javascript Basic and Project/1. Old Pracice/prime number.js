function prime_number(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            console.log('This is not a prime number') ;
            break;
        }
        console.log('This is a prime number');
    }
 
}
var result = prime_number(12);