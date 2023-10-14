 const numbers = [1,2,3,4,5,6,7,8,9];

 // map == array er sob element k alada korey kono kaj korbey function use korey
 // map == output a akta array diby

 const result = numbers.map(x => x*x); // numbers array er protita element k niye square korey output array diby
 console.log(result);

reselt0 = numbers.map((item, index, fullArray) => console.log('item: ' + item, 'index: ' + index, 'full Array: ' + fullArray)); // x=element, y= index of element. z= total array


// Object er array ty map apply

const studentList = [
    {id: 11, name: 'Jihad'},
    {id: 41, name: 'Asgar'},
    {id: 66, name: 'sifat'},
    {id: 88, name: 'jobon'}
]

const Name = studentList.map(x => x.name);
const id = studentList.map(x => x.id);
console.log(Name);
console.log(id);

