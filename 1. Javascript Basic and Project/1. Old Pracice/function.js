//1st
/**function calculation(){
    s=0;
    c=100;
    d=44;
    f=s+c+d;
    console.log(f);
}
calculation(); */ 

/// 2nd 
function calculation(num){
    var result=num*2;
    console.log(result);
}
calculation(5);
calculation(15);
calculation(25);

//3rd= fuction call and save under a variable

function calculation(num){
    var result=num*2;
    return result;
}
var a=calculation(5);
var b=calculation(15);
var c=calculation(25);
console.log(a,b,c)

