/*Every value in JavaScript has an inherent boolean value. When that value is evaluated
in the context of a boolean expression, the value will be transformed into that inherent boolean value.*/


// an empty String "" is falsy because, "" evaluates to false.
if ("") {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}


/*Here’s the list of all of the falsy values:
the Boolean value false
the null type
the undefined type
the number 0
the empty string ""
the odd value NaN (stands for "not a number" */


/*A value is truthy if it converts to true when evaluated in a boolean context.
For example, the number 1 is truthy because, 1 evaluates to true.*/

if (1) {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}

/*Here are some other examples of truthy values:

true
42
"pizza"
"0"
"null"
"undefined"
{}
[]
Essentially, if it's not in the list of falsy values, then it's truthy */


if('curt')
    console.log("This text will be printed if the condition above evaluates to true");
