/*Remember to put all of your object's properties and methods inside curly braces:
var myObject = { greeting: "hello", name: "Julia" };
Also, remember that an object is just another data type.
Just like how you would put a semicolon after a string variable declaration var myString = "hello";
don't forget to put a semi-colon at the end of your object's declaration. */

//using the {} defines it as an object
var umbrella = {
  // properties that are assigned values
  color: 'pink',
  isOpen: false,
  // a method you can call later - just a stored function
  open: function () {
        // checks the is open property
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      // sets the isOpen property
      umbrella.isOpen = true;
      return "Julia opens the umbrella!"
    }
  },
  close: function () {
    if (umbrella.isOpen === false) {
      return "The umbrella is already closed!"
    } else {
      umbrella.isOpen = false;
      return "Julia closes the umbrella!"
    }
  }
};
