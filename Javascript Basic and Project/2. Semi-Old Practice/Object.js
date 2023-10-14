// Object Declared
var student1 = {name: "mokbul", id:20,mobile: "01745678976"}
var student2 = {name: "mukul", id:220,mobile: "01734567867"}
var student3 = {name: "jiomir", id:22,mobile: "0173456787"}
console.log(student1);
console.log(student2);
console.log(student3);

// Get any property value

var student1Phone = student1.mobile; //avabey kora jai
var student2Phone = student2["mobile"]; //avabeo kora jai
var phonePropertyName = "mobile";
var student3Phone = student3[phonePropertyName]; //avabeo kora jai
console.log(student1Phone,student2Phone,student3Phone);


// Set any property value

student1.mobile = 34567890; //avabey kora jai
student2["mobile"]=234567890876; //avabeo kora jai
var phonePropertyName = "mobile";
student3[phonePropertyName] = 23456789; //avabeo kora jai
console.log(student1,student2,student3);


// Add any  new property value

student1.GPA = "5:00"; //avabey kora jai
student2["GPA"]=4.06; //avabeo kora jai
var phonePropertyName = "GPA";
student3[phonePropertyName] = 4.92; //avabeo kora jai
console.log(student1,student2,student3);
