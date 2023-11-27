function Student(name,age,cgpa,lang) {
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.lang = lang;

  this.display = function (){
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.lang);
  };
}

const student1 = new Student("A", 11, 3.2, ["bangla", "english"]);
const student2 = new Student("B", 22, 4.2, ["hindi", "tamil"]);

student1.display();
student2.display();

