
let Person = function (name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.dateOfMonth = function () {
    const date = 2023 - age;
    return date;
  };
};

let samir = new Person('Samir Khan', 12, 'student');
let masud = new Person('masud Khan', 18, 'bcs');
console.log(samir.name);
console.log(' Your Date of birth is '+samir.dateOfMonth());
console.log(masud.name);
console.log(' Your Date of birth is '+masud.dateOfMonth());
console.log(samir);
console.log(masud);
