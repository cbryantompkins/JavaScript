var crew = ["Mal","Zoe","Wash","Inara","Jayne","Kaylee"]

console.log(crew);

// Array.length  gives then length of the array

var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts.length);

// Strings have a length property too! You can use it to get the length of any string.
// For example, "supercalifragilisticexpialidocious".length returns 34.

// Push
// You can use the push() method to add elements to the end of an array.
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled"];
donuts.push("powdered"); // pushes "powdered" onto the end of the `donuts` array
// here, the `push()` method also returns 7 because the `donuts` array now has 7 elements

// Pop
// Alternatively, you can use the pop() method to remove elements from the end of an array.

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"];

donuts.pop(); // pops "powdered" off the end of the `donuts` array
donuts.pop(); // pops "sprinkled" off the end of the `donuts` array
donuts.pop(); // pops "cinnamon sugar" off the end of the `donuts` array

// With the pop() method you don’t need to pass a value;
// instead, pop() will always remove the last element from the end of the array.
// Also, pop() returns the element that has been removed in case you need to use it.

// Splice
// splice() is another handy method that allows you to add and remove elements from anywhere within an array.

// While push() and pop() limit you to adding and removing elements from the end of an array,
// splice() lets you specify the index location to add new elements,
// as well as the number of elements you'd like to delete (if any).

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche");
// removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1

/* Following is the syntax of splice() method:
arrayName.splice(arg1, arg2, item1, ....., itemX); where,

arg1 = Mandatory argument. Specifies the starting index position to add/remove items. You can use a negative value to specify the position from the end of the array e.g., -1 specifies the last element.
arg2 = Optional argument. Specifies the count of elements to be removed. If set to 0, no items will be removed.
item1, ....., itemX are the items to be added at index position arg1*/

var array = [0,1,2,3,4,5,6,7,8,9];
array.splice(2, 3,'two','three','four');
console.log(array);

// example with negative index number
var donuts = ["cookies", "cinnamon sugar", "creme de leche"];
donuts.splice(-2, 0, "chocolate frosted", "glazed");
console.log(donuts);

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice(2, 1, "Yellow", "Green")
// console.log(rainbow[5]);
// rainbow.push("Purple")
rainbow.splice(5, 0, "Purple"); /* instead of push(), you can also splice in a new index position at the end*/
console.log(rainbow);


 function hasEnoughPlayers(array) {
   return (array.length >= 7)
 }
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));


// looping over array
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
console.log(donuts);
// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}
console.log(donuts);
