class Person{
    constructor(name="anonymous", age="0"){
        this.name=name;
        this.age=age;
      //  console.log(name + 'is  '+ age +' old');
    }
    greeting(){
        return `hii i am ${this.name}`;
    }
    getDescription(){
        return `my name is ${this.name} and ${this.age} years old`;
    }

}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major
        console.log(major);
    }
   
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description= super.getDescription()
        console.log(description);
        if (this.hasMajor()){
            console.log('hhh');
            description += `Their Major is ${this.major}`;
            console.log(description);
        }
        return  description;
    }
}

class Traveler extends Person{
    constructor(name, age ){
        super();
    }
}
const me = new Student('chetan mahajan',30 ,'MCA');
//console.log(me);
const otherPerson= new Student('');
//console.log(otherPerson);
//console.log(me.greeting());
console.log(me.getDescription());
//console.log(otherPerson.hasMajor());
//console.log(me.hasMajor());


