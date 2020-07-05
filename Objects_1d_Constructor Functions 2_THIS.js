function Hero(name, role) {
this.name = name;
this.role = role;

this.introduce = function () {
  console.log(`My name is ${this.name} and I am a ${this.role}.`);
};
}

let taylor = new Hero('Taylor', 'mother');

let riley = new Hero('Riley', 'coach');

taylor.name;
riley.role;

taylor.introduce();
riley.introduce();


"A value for this is set when a method is invoked on an object, and that value refers to that object."
"Since it is a reserved word, it should not be used as any variable name, function name, etc."

"this in Constructor Functions"

function Cat(name) {
 this.name = name;
 this.sayName = function () {
   console.log(`Meow! My name is ${this.name}`);
 };
}

const bailey = new Cat('Bailey');

"In the above Cat() constructor, the function that sayName references this.name."
 "this can be used in methods. But in Cat()'s case, what exactly does this refer to?"

"As it turns out, when invoking a constructor function with the new operator, "
"this gets set to the newly-created object!"
"check out what the new bailey object looks like:""

{
  name: 'Bailey',
  sayName: function () {
    console.log(`Meow! My name is ${this.name}`);
  }
}

"In the snippet above, notice that this is outside a constructor function (i.e., in a method). "
'when you say this in a method, what youre really saying is "this object" or "the object at hand." '
"As a result, the sayName() method can use this to access the name property of that object"
"This makes the following method call possible:"

bailey.sayName();

// 'Meow! My name is Bailey'

"There are four ways to call functions, and each way sets this differently."

"First, calling a constructor function with the new keyword sets this to a newly created object."
"Recall that creating an instance of Cat earlier had set this to the new bailey object."

"On the other hand, calling a function that belongs to an object (i.e., a method) sets this to the object itself. "
"Recall that earlier, the dog object's barkTwice() method was able to access properties of dog itself."

"Third, calling a function on its own (i.e., simply invoking a regular function) will set this to window, "
"which is the global object if the host environment is the browser"
