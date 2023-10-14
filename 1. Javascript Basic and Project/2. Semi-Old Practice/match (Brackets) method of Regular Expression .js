const number = '0123456789 abcdefZTY';
const nothing = 'this is nothing and ab bc cd is also nothing';

console.log('a or b or c achy amon kichu  : ' + nothing.match(/[abc]/g));
console.log('a or b or c nai amon kichu  : ' + nothing.match(/[^abc]/g));

console.log(number.match(/[0-9]/gi));
console.log(number.match(/[a-z]/gi));
console.log(number.match(/([0-9]|[a-z])/gi));
console.log(nothing.match(/(ab|bc)/gi));



