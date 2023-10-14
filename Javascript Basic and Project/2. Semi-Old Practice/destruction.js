// Destructuring data from any array 
const marks = [66, 77, 88, 99];
const [marks1, marks2, marks3, marks4] = marks;
const [marks11, marks22] = marks;
console.log(marks1, marks2, marks3, marks4);
console.log(marks11, marks22);

// Destructuring data from any object 
const Person = {
  name: 'masud rana',
  id: 28,
  job: 'student'
};

// same variable a save korty chailey
const { name, id } = Person;
// others kono variable name a save korty chailey
const { name: Person_Name, id: Person_id } = Person;
console.log(name, id);
console.log(Person_Name,Person_id);


// Destructuring data from any complex object

const complex_object = {
  innerObject1: {
    innerObject2: {
      title: 'Hello World',
    }
  },
};

// same variable a save korty chailey
const { innerObject1: { innerObject2: {title} } } = complex_object;
console.log(title);

// others kono variable name a save korty chailey
const { innerObject1: { innerObject2: {title: objectTitle} } } = complex_object;
console.log(objectTitle);
