 const numbers = [1,2,3,4,5,6,7,8,9];

// find == sorto onusarey kono array thekey first akta element khujey ber korbey function use korey
// find == output a akta value diby not array

result3 = numbers.find( x => x>5);
result4 = numbers.find( x => x===3);
console.log(result3);
console.log(result4);


// Object er array ty find  apply

const studentList = [
    {id: 11, name: 'Jihad'},
    {id: 41, name: 'Asgar'},
    {id: 66, name: 'sifat'},
    {id: 88, name: 'jobon'}
]

exactValue = studentList.find(x => x.id==41);

console.log(exactValue);
