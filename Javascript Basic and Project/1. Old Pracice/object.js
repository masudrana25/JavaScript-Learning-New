var student1 ={id:112, phone:2556748, name:"Masud"};
var student2={id:444, phone:3345678909, name:"Nisa"};

// Update data 
student1.phone=111111;
//student1["phone"]=111111;
//student1[phonePropName]=111111;

var masud_number=student1.phone;
//var masud_number=student["phone"];
//var masud_number=student[phonePropName];
var nisa_number=student2.phone;

// Add property
student1.home_district= "Chapinawabganj";
student2.home_district="Chapainawabganj";

console.log(student1,student2);
console.log(masud_number,nisa_number);