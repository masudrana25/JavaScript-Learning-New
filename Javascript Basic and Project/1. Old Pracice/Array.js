var a=[12,2,3,56];
//view the variable array a
console.log(a)
// veiw different element of this array by giving their position.
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])

// find any element from array a

var x=a[2];
var y=a[0];

// replace any element of array a

a[2]=222;
a[0]=123455;

// find the position of any any element in a array

var d=a.indexOf(56);// a array ty 56 ar position kothai ta dekhabey d variable ar moddhy. Jodi element ta array ar moddhy na thakey tobey tar posiotion -1 dekhaby.

// array push

a.push(122);// a array ty new element hisebey 122 k last a add kore dibey.
a.unshift(111);// a array ar first a 111 element add korbey.

// array lenght jantey

console.log(a.length)// a array ar length dekhabey

// array pop= kono element k remove kora

a.pop();// last ar element ta k remove kore dibey.
a.shift();// first ar element ta k remove kore dibey.
var b=[12,2,3,56,4,5,6,7,8,9];

var part_of_b=b.slice(1,4)//javascript element ar position 0,1,2,3,4,5,6.... avabe count kore. slice(1,4)==means 1 no. position theke 4-1=3 ti element select korbey.
console.log(part_of_b)

