const marks = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const members = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const num = [1, 2, 3];

// onk gula array miley akta new array create
const newArray = [...marks, ...members, ...num];
const newArray2 = ['Members List', ...members, 'list complete'];
console.log(newArray);
console.log(newArray2);

const sum = (a, b, c) => {
  const sum = a + b + c;
  return sum;
};
console.log('sum is : ' + sum(...num)); // num er element gula k alada korey sum function er input hiseybey diye function ta k call korbey

