// While Loop

var num=0;
while (num<15){
    console.log(num);
num=num+1;// num++ is same kaj
}

// For Loop

for(var i=0; i<10; i++){//must ";" use korty hby,noile code run hby na.
    console.log(i);
}

// array thekey data alada korty by using for loop
var num=[5, 6, 7, 8, 9, 3, 2];

for (var i=0; i<num.length; i++){
    var element=num[i];
    console.log(element)
}


// if/else if/else

var num=4
if (num>1000){
    console.log('This number is greater than 1000')
}else if (num>100){
    console.log('This number is greater than 100')
}else if (num>50){
    console.log('This number is greater than 50')
}else if (num>30){
    console.log('This number is greater than 30')
}else if (num>10){
    console.log('This number is greater than 10')
}else if (num>5){
    console.log('This number is greater than 5')
}else {
    console.log('This number is greater than 0')
}


//swith

num=4;
switch(num){
    case 1000:
        console.log('I am 1000');
        break;// break na diley sob gula result dekhabey
    case 100:
        console.log('I am 100');
        break;
    case 50:
        console.log('I am 50');
        break;
    case 30:
        console.log('I am 30');
        break;
    case 5:
        console.log('I am 5');
        break;
        default:
            console.log('I don`t know who you are');
}


