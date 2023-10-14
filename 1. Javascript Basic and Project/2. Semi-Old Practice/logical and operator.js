//first ta true holey 2nd tai jabey. First ta false holey 2nd tai jabey na. Duitai true holei kabol true output dibey. 
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

const work = 'go' && 'eat'; // go true holey eat a jaby and work = go save hobey
const work2 = false && 'eat';
const work3 = undefined && 'eat';
console.log(work);
console.log(work2);
console.log(work3);

console.log('go to visit' && 'go to class');
console.log(undefined && 'go to class');
console.log(undefined && undefined);

const User = {
  name: 'MD MASUD RANA',
  // age:28,
};
User.name && console.log(User.name);
User.age && console.log(User.age); //jodi age pai, tobey print korbey, otherwise print korbey na.

(User.name || User.age) && console.log('Found : ' + (User.name || User.age));






