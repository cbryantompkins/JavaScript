/*A switch statement is an another way to chain multiple else if statements that
 are based on the same value without using conditional statements.
 Instead, you just switch which piece of code is executed based on a value. */

 var option = 3;

 switch (option) {
  case 1:
    console.log("You selected option 1.");
  case 2:
    console.log("You selected option 2.");
  case 3:
    console.log("You selected option 3.");
  case 4:
    console.log("You selected option 4.");
  case 5:
    console.log("You selected option 5.");
  case 6:
    console.log("You selected option 6.");
}

/*When the switch statement first evaluates, it looks for the first case clause
whose expression evaluates to the same value as the result of the expression passed to the switch statement.
Then, it transfers control to that case clause, executing the associated statements. */

/* Prints:
You selected option 3.
You selected option 4.
You selected option 5.
You selected option 6.*/

/* The break statement can be used to terminate a switch statement and
transfer control to the code following the terminated statement.
By adding a break to each case clause, you fix the issue of the switch statement
falling-through to other case clauses.*/

var option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}


// In some situations, you might want to leverage the "falling-through" behavior of switch statements to your advantage.

// For example, when your code follows a hierarchical-type structure.

/* each successive tier builds on the next by adding more to the output.
Without any break statements in the code, after the switch statement jumps to the "nsfw deck",
it continues to fall-through until reaching the end of the switch statement.

Also, notice the default case.
You can add a default case to a switch statement
and it will be executed when none of the values match the value of the switch expression.*/

var tier = "none";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);



// change the value of `education` to test your code
var education = 'a Doctoral degree';

// set the value of this based on a person's education
var salary = 0;

switch (education) {
  case 'no high school diploma':
    salary = 25636;
    break;
  case 'a high school diploma':
    salary = 35256;
    break;
  case 'an Associate\'s degree':
    salary = 41496;
    break;
  case 'a Bachelor\'s degree':
    salary = 59124;
    break;
  case 'a Master\'s degree':
    salary = 69732;
    break;
  case 'a Professional degree':
    salary = 89960;
    break;
  case 'a Doctoral degree':
    salary = 84396
    break;
}

console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString('en-US') + "/year.");
