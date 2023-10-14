const text = 'aaaabcdefghij109832456';

//ontoto akbar "a" achy emon ta k purota aaa select korby
console.log(text.match(/a+/g));


//ontoto zero bar "a" achy emon ta k purota aaa select korby
console.log(text.match(/a*/g));

//a thakty parey, abar nao pare amon gula select korby
console.log(text.match(/a?/g));

// string er sess a "a" achy amon
console.log(text.match(/a$/g));

// string er suruty "a" achy amon
console.log(text.match(/^a/));

// ab achy kina test --- true or false return korbey. 
console.log((/ab/g).test(text));
console.log((/bdd/g).test(text));

//"ab" jekhan a pabey seikhan a "ab" k bad diye oi borabor split korey dibey string k
console.log(text.split(/ab/g));



