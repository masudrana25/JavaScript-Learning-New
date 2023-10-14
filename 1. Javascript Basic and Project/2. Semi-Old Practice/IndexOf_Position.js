var Dresctiption = " JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. Wikipedia";
var age = [12,33,45,66];

// Position start with---- 0,1,2,3,4,5....avabey

var position0 = age.indexOf(12);
var position1= age.indexOf(33);
var position2 = age.indexOf(45);
var positionNegative = age.indexOf(99); // array er moddhy 99 nai, tai tar position -1 dekhacchy
console.log(position0);
console.log(position1);
console.log(position2);
console.log(positionNegative);



var PositionOfAWord = Dresctiption.indexOf('as');
var PositionOfUnknownWord = Dresctiption.indexOf('masud');
console.log(PositionOfAWord); 
console.log(PositionOfUnknownWord); //unknown ward er position -1 dekhai