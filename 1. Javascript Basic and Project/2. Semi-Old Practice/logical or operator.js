//first ta true holey 2nd tai jabey na. First ta false holey 2nd tai jabey and true na false seita dekhby.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('go to visit' || 'go to class');
console.log(undefined || 'go to class');
console.log(undefined || undefined);

const User = {
  name: 'MD MASUD RANA',
};
const userAge = User.age || 'User Age not Found';
const userName = User.name || 'User Name not Found';
console.log(userName);
console.log(userAge);



