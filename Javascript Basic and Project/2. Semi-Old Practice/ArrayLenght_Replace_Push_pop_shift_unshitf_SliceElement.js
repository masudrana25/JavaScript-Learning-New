var age= [11,22,33,4,55,56,24,65];
console.log(age);

//Know array size
var arraylength = age.length;
console.log('Array length is '+arraylength);

//Replace Element
age[0]=99;
age[3]=44;
console.log(age);

// Get any value from array
var thirdAge = age[3];
var forthAge = age[4];
console.log(thirdAge);
console.log(forthAge);

//add any element at the last of the array
age.push(88);
age.push(77);
console.log('after adding element at last =' +age);

// remove element from last of the array
age.pop();
age.pop();
console.log('after removing element at last =' +age);

//add any element at the first of the array
age.unshift(88);
age.unshift(77);
console.log('after adding element at first =' +age);

//remove any element at the first of the array
age.shift();
age.shift();
console.log('after removing element at first =' +age);



// Slice element from array
var sliceElementAll = age.slice(2);// 2 no  position thekey baki sob gula element k slice korey new variable er modddy rakhbey.

var sliceElementWithCondition1 = age.slice(2,4); // 2 no  position thekey 4-2=2 ta element slice korbey. 2 thekey suru korey 4 er agey porjonto 2 no and 3 no, ai duita element k slice korbey.

var sliceElementWithCondition2 = age.slice(2,6);// 2 no  position thekey 6-2=4 ta element slice korbey. 2 thekey suru korey 6 er agey porjonto 2 no, 3 no, 4 no, 5 no ai 4 ta element k slice korbey.

console.log('Slice Element all by one condition = '+sliceElementAll);
console.log('Slice 2 Element by condition1 = '+sliceElementWithCondition1);
console.log('Slice 4 Element by condition2 = '+sliceElementWithCondition2);
