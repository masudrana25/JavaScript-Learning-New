// filter == sorto onusarey kono array thekey elements gula k khujey ber korbey function use korey
// filter == output a akta new array diby

const numbers = [1,2,3,4,5,6,7,8,9];
result2 = numbers.filter( x => x>5);
console.log(result2);


// Object er array ty filter apply

const studentList = [
    {id: 11, name: 'Jihad'},
    {id: 41, name: 'Asgar'},
    {id: 66, name: 'sifat'},
    {id: 88, name: 'jobon'}
]

const bigger45 = studentList.filter(x => x.id > 45);
console.log(bigger45);
