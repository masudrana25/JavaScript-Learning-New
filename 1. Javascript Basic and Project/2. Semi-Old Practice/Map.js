// Be careful to use this Map object as it does not support to all the browser and other devices.

const newMap = new Map();
newMap.set('name', 'azim');
newMap.set('job', 'student');
newMap.set('id', 4);
newMap.set('deleteProperty', 'will be deleted');

const newMap2 = new Map();
newMap2.set('name', 'Masud');
newMap2.set('job', 'student');
newMap2.set('id', 4);

//total object ta k dekhabey
console.log(newMap);

// Map object er kono specific property access korty chailey
console.log(newMap.get('name'));
console.log(newMap.get('company'));

// Map object a kono specific property achy ki na janty chailey
console.log(newMap.has('job'));
console.log(newMap.has('company'));

//kono property delete korty chailey
console.log(newMap.delete('deleteProperty'));
console.log(newMap);

// Map object er length janty
console.log(newMap.size);
console.log(newMap2.size);

//Map object k purota delete korty
console.log(newMap2);
newMap2.clear();
console.log(newMap2);


