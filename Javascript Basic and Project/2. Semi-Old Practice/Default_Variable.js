
const default_Parameter = (name = 'masud', id = 28) => {
    console.log('my name is ' + name + ' and I am ' + id + ' years old');
};
default_Parameter();
default_Parameter('Abdul Alim', 46);


const default_Parameter2 = (name , id ) => {
    name ? name : 'masud';
    id ? id : 28;
    console.log('my name is ' + name + ' and I am ' + id + ' years old');
};
default_Parameter();
default_Parameter('Abdul Alim', 46);

function DefaultVariable(num1, num2 = 3) {//num2 er value input na diley, function num2 = 3 use korey kaj korbey
    // if (num2== undefined) {
    //     num2 = 3;
    // }

    // num2 = num2 || 3;

    sum = num1 + num2;
    return sum;
}

sum1 = DefaultVariable(2,4);
sum2 = DefaultVariable(2);
console.log(sum1,sum2);