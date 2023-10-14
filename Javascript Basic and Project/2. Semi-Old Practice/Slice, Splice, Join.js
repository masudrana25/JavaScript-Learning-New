const A = [1,2,3,4,5,6,7,8,9];

// Slice of a Array == sorto diye element alada kory new array create kora

const sliceA = A.slice(2,5); // 2 no position er element thekey suru korey 5-2 = 3 ti element k niye notun array create korbey.
console.log(sliceA);



// Splice of a Array == sorto diye kichu element k array thekey ber korey deya and sathy sathy new array oo create korey alada kora element gula diye.

const spliceA = A.splice(2,5,77,88,99); // 2 no position thekey suru korey 5 ta element k alada korbey and ai 5 ta element k original array thekey ber korey dibey. and khali korey deuya jaigai 77,88,99 bosabey.
console.log(spliceA);
console.log(A);



// Join == array er element gula k aksathy joint diye akta string banabey.

const join1 = A.join(""); // passa passi likhey join
const join2 = A.join(" "); // akta space diye join
const join3 = A.join(","); // majhey koma diye join
const join4 = A.join("join"); // majhey kichu likhey join

console.log(join1);
console.log(join2);
console.log(join3);
console.log(join4);