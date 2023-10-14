a = [1,2,3,4];
b = [6,7,8,9];

c = [11,22,33,34];

all = a.concat([5]).concat(b).concat(c);
all2 = [...a, 5, ...b, ...c];
console.log(all);
console.log(all2);

maxValue = Math.max(all); //Array thekey max ber kortey parey na 
maxValue2 = Math.max(...all); // Array er element gulakey agy alada korey ber korbey, then sei element gular moddhy max  value ber korbey.

console.log(maxValue);
console.log(maxValue2);