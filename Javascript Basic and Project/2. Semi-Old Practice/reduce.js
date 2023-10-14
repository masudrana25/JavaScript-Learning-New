// Number array ty reduce use

const number = [12, 334, 4, 55, 6, 7, 88, 999];

const total = number.reduce((sum, eachElementOfNumber, index, fullArray) => {
  console.log('index: ' + index + ' sum: ' + sum, ' fullArray: ' + fullArray);
  return sum + eachElementOfNumber;
}, 0); // akline a likhley return kora lagby na, noiley return likha lagby
console.log('Total sum '+total);

//object thekey reduce kora 

const friends = [
  { name: 'aaaaaaa', salary: 11111 },
  { name: 'bbbbbbb', salary: 2222 },
  { name: 'ccccccc', salary: 33333 },
  { name: 'ddddddd', salary: 444444 },
  { name: 'eeeeeee', salary: 55555 },
  { name: 'fffffff', salary: 6666666 }, 
]

const totalSalary = friends.reduce(( sum, eachPeronSalary ) => {
  const total = sum + eachPeronSalary.salary;
  return total; // multiline tai return likha lagby
}, 0);

console.log('total salary',totalSalary);