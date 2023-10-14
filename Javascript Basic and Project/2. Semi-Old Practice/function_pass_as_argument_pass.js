function CallMyName(name, callback) {
  var myAge = 28;
  callback(myAge);
  console.log('I am ' + name  );
};

function Hello(age) {
  console.log('I am ' + age+ 'years old');
};

CallMyName('Masud Rana',Hello)