//Simple conditional

var a=12;
if(a<10){ //we can also use a>10, a==10, a!=10-not equal
    console.log("a is less then 10");
}
else{
    console.log("a is greater then 10");
}


// Biggest number finder

var a=12, b=13, c=14;

if(a>b && a>c){ // we can also use 'or' operator as follow " || "
    console.log(" a is the biggest number")
}
else if(b>a && b>c){
    console.log(" b is the biggest number")
}
else{
    console.log(" c is the biggest number")
}



