const marks = [11, 22, 3, 4, 55, 66, 7, 88];

for (const number of marks) {
  if (number === 66) {
    break;
  };
  console.log('number is : ', number);
};

const index_of_66 = marks.findIndex(number => number === 66);
console.log('index of 66 is : ' + index_of_66);