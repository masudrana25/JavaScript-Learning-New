// Argument == array like object
//Working space of Argument 
//Argument just kono akta function er moddhey e kaj korty parey. Bairey parey na. Bairey Argument k call korley Undefind dekhabey. 

//summation without argument
function Sum(num1,num2) {
    var summation = num1+num2;
    return summation;
}

var result = Sum(2,3,4,5,6); // function ar input just 2ta , tai function call er prothom 2ta input k e function ta jog korbey. baki gula k skip korbey.
console.log(result);

// Summation with Argument 
function SumWithArgument(num1,num2) {
    var totalInput = arguments;
    sum = 0;
    for (let i = 0; i < totalInput.length; i++) {
        var element = totalInput[i];
        sum = sum + element;
    }
    return sum;
}
var result2 = SumWithArgument(2,3,4,5,6,7,8,9); //vitorer argument ta sob gula input k sonakto korbey and then for loop diye sum ber korby..
console.log(result2);

