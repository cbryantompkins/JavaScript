//To instantiate (i.e., create) a new object, we use the new operator to invoke the function:

new SoftwareDeveloper();

  // 'The first thing to note above is the use of the /new/ keyword. Second, note that the name of the constructor function'
  // SoftwareDeveloper(), 'is written with the first letter capitalized to visually distinguish it from a regular function.''

  // "even though the function's name starts with a capital, that doesn't automatically make this a constructor function"
  // "(i.e., though developers name constructor functions in CamelCase by convention, it is not enforced by the language)."

  //What does make SoftwareDeveloper() a constructor function are:

  //The use of the 'new' operator to invoke the function
  //How the function is coded internally

  //before you can instantiate a new object via a function, the function must be defined
  //this is created and coded internally as below to give the object it creates keys and values

"the defines the constuctor function which, when called, is A FUNCTION THAT CONTRUSCTS A 'NEW' OBJECT"

function SoftwareDeveloper() {
  this.favoriteLanguage = 'JavaScript';
}

//The above function will add a favoriteLanguage property to any object
//that it creates, and assigns it a default value of 'JavaScript'
//"this" refers to the new object that was created by using the "new" keyword in front of the constructor function

//Constructor functions in JavaScript should not have an explicit return value
//(i.e., there should not be return statement).

/use the new operator to create a new object:

let developer = new SoftwareDeveloper();

//Let's invoke the same SoftwareDeveloper() constructor two more times to instantiate two additional objects: engineer and programmer.

let engineer = new SoftwareDeveloper();
let programmer = new SoftwareDeveloper();

console.log(engineer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }

console.log(programmer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }



//Let's update the constructor above to accept a single argument, and assign the name property to it:

function SoftwareDeveloper(name) {
  this.favoriteLanguage = 'JavaScript';
  this.name = name;
}

let instructor = new SoftwareDeveloper('Andrew');

console.log(instructor);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript', name: 'Andrew' }


// we can create different objects using the same constructor.
// call the same constructor function but pass a different argument this time:

let teacher = new SoftwareDeveloper('Richard');

console.log(teacher);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript', name: 'Richard' }
