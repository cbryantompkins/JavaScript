What is a "Scope"?
The scope is defined as a specific portion of the code. There are three types of scope in Javascript

Global scope - When a particular variable is visible (can be used) anywhere in the code.
               Such a variable is generally called as Global variable.
Function scope - When a particular variable is visible (can be used) within a particular function only.
                 Such a variable is generally called as Local variable.
Block scope - When a particular variable is visible (can be used) within a pair of { . . . } only.


There are three ways to declare a variable:

let - It a new way to declare a variable in any scope - Global, Local, or Block.
      The value of this variable can be changed or reassigned anytime within its scope.

const - It is also a way to declare constants in any scope - Global, Local, or Block.
        Once you are assigned a value to a const variable, the value of this variable
        CANNOT be changed or reassigned throughout the code.

var - This is the old way of declaring variables in only two scope - Global, or Local. 
      Variables declared with the var keyword can not have Block Scope.
      The value of this variable can be changed or reassigned anytime within its scope.

/*
 * Global scope.
 * This variable declared outside of any function is called Global variable.
 * Hence, you can use this anywhere in the code
 */
var opinion = "This nanodegree is amazing";

// Function scope
function showMessage() {
    // Local variable, visible within the function `showMessage`
    var message = "I am an Udacian!";

    // Block scope
    {
          let greet = "How are you doing?";
        /*
         * We have used the keyword `let` to declare a variable `greet`
         because variables declared with the `var` keyword can not have Block Scope.
         */
    } // block scope ends

    console.log( message ); // OK
    console.log( greet ); // ERROR.
    // Variable greet can NOT be used outside the block

    console.log( opinion ); // OK    to use the gobal variable anywhere in the code

} // function scope ends
