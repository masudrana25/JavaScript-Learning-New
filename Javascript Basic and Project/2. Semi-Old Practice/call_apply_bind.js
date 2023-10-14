const normalPerson = {
  firstName: 'Abdul',
  lastName: 'Alim',
  Work: 'Youtube',
  salary: 20000,
  getFullName: function () {
    const name = this.firstName + ' ' + this.lastName;
    return name;
  },
  chargeBill: function (amount,tips,tax) {
    this.salary = this.salary - amount - tips - tax;
    return this.salary;
  },
};

const heroPerson = {
  firstName: 'Abdul',
  lastName: 'Jabbar',
  salary: 25000,
}

const friendlyPerson = {
  firstName: 'Abdul',
  lastName: 'Halim',
  salary: 30000,
}

normalPerson.chargeBill(5000, 200,300);
console.log(normalPerson.salary);

//bind
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(5000,200,300);
console.log( heroPerson.salary );

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(5000,300,300);
console.log(friendlyPerson.salary);

//call

normalPerson.chargeBill.call(heroPerson, 2000, 200, 333);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, 2000,300,400);
console.log(friendlyPerson.salary);

//apply

normalPerson.chargeBill.apply(heroPerson, [5000, 300, 560]);
console.log(heroPerson.salary);

normalPerson.chargeBill.apply(friendlyPerson, [3000, 2345, 678]);
console.log(friendlyPerson.salary);