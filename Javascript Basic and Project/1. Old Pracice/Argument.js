function add(num1,num2){
    s=num1+num2;
    return s;
}

sum=add(2,3);
console.log(sum);

sum2=add(2,3,4,66);// jehetu add function defind korer somoi 2ta input disi, tai akn new kore joto input deina keno, 1st ar duitai kei sudu jog korbey
console.log(sum2);

// This Problem Solved by Argument which is a like array not exactly array.

function add22(num1,num2){
    Argument_array=[...arguments];
    sum=0;
    for (let i = 0; i < Argument_array.length; i++) {
        var sum  = sum + Argument_array[i];
    }
    return sum;
}
 sum_from_argument= add22(2,3,4,5);
 console.log(sum_from_argument);