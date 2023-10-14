class GeneralPerson {
  constructor(name, id,job) {
    this.name = name;
    this.id = id;
    this.job = job;
  }
};
console.log(new GeneralPerson('Abdul Alim', 333, 'student'));

class TeacherPerson extends GeneralPerson {
  constructor( name, id, job, subject ) {
    super(name, id, job);
    this.subject = subject;
  };
};
console.log(new TeacherPerson('Abdul Bari', 9678, 'teacher','physics'));