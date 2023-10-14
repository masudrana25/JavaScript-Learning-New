const text = 'ABCDEFGHIJK abcdefghijk\n\t0123456789!@$%&()^ _--';
console.log(text);

// new line chara sob character select korby
console.log(text.match(/./g));

// word(a-z), number(0-9), underscore(_), select korty
console.log(text.match(/\w/g));

// word(a-z), number(0-9), underscore(_), chara baki sob select korty
console.log(text.match(/\W/g));

// just digit select korty/ check korty
console.log(text.match(/\d/g));

// just digit chara baki sob select korty/ check korty
console.log(text.match(/\D/g));

// space, tab , new line  select korty/ check korty
console.log(text.match(/\s/g));

// space, tab , new line chara baki sob  select korty/ check korty
console.log(text.match(/\S/g));


// kono word ar first latter "a" diye suru hoiley select korty/ check korty
console.log(text.match(/\ba/g));

// kono word ar last latter "y" diye ses hoiley select korty/ check korty
console.log(text.match(/y\b/g));

// kono word ar last latter "b" diye ses hoiley select korty/ check korty
console.log(text.match(/k\b/g));

// new line check korty
console.log(text.match(/\n/));

//null kono kichu check korty
console.log(text.match(/\0/));


