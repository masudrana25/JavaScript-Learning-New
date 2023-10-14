
const Members = class {
    constructor(name,id,job,boyos) {
        this.name = name;
        this.id = id;
        this.job = job;
        this.boyos = boyos;
    }
    dateOfBirth (){
        console.log(` ${this.name} is ${2023-this.boyos} years old`);
    }
}

const Alim = new Members('Alim', 28, 'student', 22);
console.log(Alim);
Alim.dateOfBirth();



class Student{
    constructor(sID,sName){
        this.id = sID;
        this.name = sName;
        this.school = 'Diar Dhainagar High School.';
    }
}
student1 = new Student(11, "Masud");
student2 = new Student(22, "Abdul Alim");
student3 = new Student(144, "Sabbir");
console.log(student1);
console.log(student2);
console.log(student3);
