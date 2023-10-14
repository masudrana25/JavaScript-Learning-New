class Parent{
    constructor(){
        this.FatherName = 'Abdul Hakim';
    }
}

class Child extends Parent{ // uporer parent class er sathy link korbey.
    constructor(name){
        super(); //uporer parent class k call korbey
        this.ChildName = name;

    }
}

child1 = new Child("siraji");
child2 = new Child("rajib");

console.log(child1);
console.log(child2);
