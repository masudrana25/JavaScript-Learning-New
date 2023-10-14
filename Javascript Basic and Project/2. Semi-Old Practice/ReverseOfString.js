const string = 'A village is a clustered human settlement or community, larger than a hamlet but smaller than a town';

let Reverse = '';
for (let i = 0; i < string.length; i++) {
    const element = string[i];
    Reverse = element + Reverse;
}
console.log('Reverse of the String is = ',Reverse);