function explain_callBack(name,age,task){
    console.log('Hello ',name);
    console.log('Your age is ',age);
    task();
}

function washHand(){
    console.log('Wash your hand');
}

function takeShower(){
    console.log('Take Shower');
}

function scrollFacebook(){
    console.log('Scroll Facebook but dont like any post');
}

// Call the main function by using Callback function

explain_callBack('Sabbir',22,washHand);
explain_callBack('Abdul ALIM',23,takeShower);
explain_callBack('Masud',24,scrollFacebook);