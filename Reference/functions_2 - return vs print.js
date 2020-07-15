!!YOU MUST DO THIS IN A BROWSER CONSOLE TO SEE THE RETURN!!

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);

Prints: "Printing: isThisWorking was called and 3 was passed in as an argument"
Returns: "Returning: I am returning this string!"

If you don't explicitly define a return value, the function will return undefined by default.

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
}

isThisWorking(3);
Prints: "Printing: isThisWorking was called and 3 was passed in as an argument"
Returns: undefined

!!YOU MUST DO THIS IN A BROWSER CONSOLE TO SEE THE RETURN!!

Return stops the function

so in this function only "zzz" gets returned because the the function exits after that

function sleep() {
  console.log("I'm sleepy!");
  return "zzz";
  return "snore";
}

sleep();

Once the code evaluates the first return statement, the function finishes.
The second return statement will never be reached.
However, it is possible to have multiple return statements in a function.
For instance, you could use a conditional to specify when each of the return statements is evaluated.
You could, for example, only return the value of 1 if the string "one" was passed into the test() function.
Else, you could return the value of 2.
