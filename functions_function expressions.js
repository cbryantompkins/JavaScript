// When a function is stored inside a variable it's called a function expression.
//
// Notice how the function keyword no longer has a name.

var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

console.log(catSays(4));

/*All function declarations are hoisted and loaded before the script is actually run.
Function expressions are not hoisted, since they involve variable assignment, and only variable declarations are hoisted.
The function expression will not be loaded until the interpreter reaches it in the script */


/* Being able to store a function in a variable makes it really simple to pass the function into another function.
A function that is passed into another function is called a callback. */

// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
console.log(helloCat(catSays));


/*Inline function expressions
A function expression is when a function is assigned to a variable.
And, in JavaScript, this can also happen when you pass a function
inline as an argument to another function. */

// Function expression that assigns the function displayFavorite
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");

/*But you could have bypassed the first assignment of the function,
by passing the function to the movies() function inline.*/

// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
          // this entire function declaration corresponds to messageFunction parameter above
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
      // this is actually the second parameter from above, 'name'
}, "Finding Nemo");

// so you can create a funciton in the line, hence inline Function

function say_hi(speakFunction, message) {
  speakFunction(message);
}

say_hi(function casualGreeting(casual){
  console.log(casual + ", my name is curt");
}, "What up");

/*Using an anonymous inline function expression might seem like a very not-useful thing at first.
 Why define a function that can only be used once and you can't even call it by name?

Anonymous inline function expressions are often used with function callbacks
that are probably not going to be reused elsewhere. Yes, you could store the function in a variable,
give it a name, and pass it in like you saw in the examples above. However,
when you know the function is not going to be reused, it could save you many
lines of code to just define it inline. */

// anonymous function expression
var laugh = function(n) {
  var laughs = "";
  for (var i = 1; i <= n; ++i)
  laughs += "ha"
  return laughs + "!"
}

console.log(laugh(10));


// named function expression
var cry = function bigBaby() {
  var sound = "boohoo!";
  return sound;
}

console.log(cry());


function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(n) {
  var laughs = "";
  for (var i = 1; i <=n; i++)
    laughs += "ha"
    return laughs +'!'
});
