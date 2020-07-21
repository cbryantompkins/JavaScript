// function Dog(age, weight, name) {
//   this.age = age;
//   this.weight = weight;
//   this.name = name;
//   this.bark = function () {
//     console.log(`${this.name} says woof!`);
//   };
// }
"here the bark method is moved from the constructor function to the prototype"
'if you were to create many dog objects, using the prototype helps save memory by not creating'
'a new bark function for each one'

function Dog(age, weight, name) {
  this.age = age;
  this.weight = weight;
  this.name = name;
}

Dog.prototype.bark = function () {
    console.log(`${this.name} says woof!`);
};

dog1 = new Dog(2, 60, 'Java');

dog2 = new Dog(4, 55, 'Jodi');

dog1.bark();

dog2.bark();


////////
