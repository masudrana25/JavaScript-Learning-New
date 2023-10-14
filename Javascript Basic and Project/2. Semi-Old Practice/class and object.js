
//class structure declared
class Person {
  constructor(firstName,lastName,salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }
}

// object declared by using class
const person1 = new Person("aaaaa", "bbbbb", 3000);
const person2 = new Person("ddddd", "ccccc", 6000);
console.log(person1, person2)


// old method of object

function Person55(firstName,lastName,salary) {
       this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
}

const person3 = new Person55("aaaaa", "bbbbb", 3000);
const person4 = new Person55("ddddd", "ccccc", 6000);
console.log(person3, person4)