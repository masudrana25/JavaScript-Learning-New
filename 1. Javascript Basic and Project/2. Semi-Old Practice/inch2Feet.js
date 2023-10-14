function inch2feet(inch) {
    var feet = inch/12;
    feet = feet.toFixed(3);
    return feet;
}

var inch122InFeet = inch2feet(122);
var inch12InFeet = inch2feet(12);
var inch22InFeet = inch2feet(22);
var inch42InFeet = inch2feet(42);
console.log(inch122InFeet,inch12InFeet,inch22InFeet,inch42InFeet);