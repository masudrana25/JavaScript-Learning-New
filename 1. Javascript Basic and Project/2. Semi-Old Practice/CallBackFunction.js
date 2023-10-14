function main(callbacks) {
  console.log('main function called');
  callbacks();
};

function other() {
  console.log('other function called');
}

main(other);

// 2nd example

function CallBackFunction(name, age, task) {
    console.log('Your Name is ',name);
    console.log('Your age is ',age);
    task();
}

function washHand() {
    console.log('Wash your hand.');
}
function TakeBath() {
    console.log('Take Bath.');
}
function GoHome() {
    console.log('Go to your home.');
}

CallBackFunction('Sabbir',23,washHand);
CallBackFunction('Ruhul',20,TakeBath);
CallBackFunction('jahid',13,GoHome);

