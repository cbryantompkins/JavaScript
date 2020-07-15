// function with 1 parameter
function reverseString(reverseMe) {
  // code to reverse a string!
}

// function with 2 parameters
function doubleGreeting(name, otherName) {
  // code to greet two people!
}

// accepts no parameters! parentheses are empty
function sayHello_v1() {
  var message = "Hello!"
  console.log(message);
}
// call the function
sayHello_v1()

// using the return function
// declares the sayHello function
function sayHello_v2() {
  var message = "Hello!"
  return message; // returns value instead of printing it
}
// print what the function returns
console.log(sayHello_v2());

// you can store arguements (values that appear in the code when the function is called)
// inside parameters (a varialbe name inside the function declaration)
function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}

var avg = findAverage(5, 9);

console.log(avg);



// x and y are parameters in this function declaration
function add(x, y) {
  // function body - The function body is enclosed inside curly brackets
  // Here, `sum` variable has a scope within the function.
  // Such variables defined within a function are called Local variables
  // You can try giving it another name
  var sum = x + y;
  return sum; // return statement - Return statements explicitly make your function return a value
}

// 1 and 2 are passed into the function as arguments,
// and the result returned by the function is stored in a new variable `sum`
// Here, `sum` is another variable, different from the one used inside the function
var sum = add(1, 2);

console.log(sum);

// simple print function
function laugh_vPrime() {
  return "hahahahahahahahahaha!";
}
console.log(laugh_vPrime());

// print function with parameter
function laugh(num) {
  var sound = ""
  for (var i = num; i > 0; i--) {
    sound += "ha";
  }
  return sound+"!";
}
 console.log(laugh(3));
