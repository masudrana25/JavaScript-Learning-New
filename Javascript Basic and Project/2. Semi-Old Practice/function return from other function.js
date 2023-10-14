function welcome(name) {
  console.log('Welcome ' + name);
  return function (age) {
    console.log('I am ' + name + ' and I am ' + age + ' years old');
  };
};

welcome('Masud Rana')(22)