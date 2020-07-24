
//constructor function
function Animal (name) {
  this.name = name;
}
//assigns walk to animal prototype
Animal.prototype.walk = function () {
  console.log(`${this.name} walks!`);
};
//uses call method on the constructor to define name
function Cat (name) {
  Animal.call(this, name);
  this.lives = 9;
}
//sets any created cats to inherit from animal
Cat.prototype = Object.create(Animal.prototype);
//sets the consturctor to Cat instead of Animal
Cat.prototype.constructor = Cat;
//sets meow method on Cat protoype
Cat.prototype.meow = function () {
  console.log('Meow!');
};
//Now all cats will have a name and walk method inherited from Animal
//all cats will have a meow method from the cat prototype
const bambi = new Cat('Bambi');

bambi.meow();
bambi.walk();

bambi.name;
