const dog = {
  name: 'Jodi',
  age: 7,
  ageOneYear: function () {
    this.age += 1;
    console.log('Current age: ' + this.age);
  },
  woof: function () {
    console.log(this.name + " says 'woof!'");
  },
  whatIsThis: function () {
    console.log(this);
  }
};
// call the whatIsThis function which log 'this' - which refers to the dog object
dog.whatIsThis();
// uses this.name to access this objects (eg dog) name property
dog.woof();
// uses 'this' to access the dog object's age and add 1
dog.ageOneYear();

console.log(dog.age);


const chameleon = {
    color: 'green',
    changeColor: function (){
        this.color = 'pink';
    }
}
console.log(chameleon.color);
chameleon.changeColor();
console.log(chameleon.color);
