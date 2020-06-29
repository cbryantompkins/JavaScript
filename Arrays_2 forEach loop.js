/*Arrays have a set of special methods to help you iterate over and perform operations on collections of data.
 big ones to know are the forEach() and map() methods.
 he forEach() method gives you an alternative way to iterate over an array,
 and manipulate each element in the array with an inline function expression. */

 var donuts = ['jelly donut', 'chocolate donut', 'glazed donut'];

 donuts.forEach(function(donut) {
   donut += ' hole';
   donut = donut.toUpperCase();
   console.log(donut);

 });
// using function arrow
donuts.forEach(donut => {
  donut = donut.toUpperCase();
  donut = "1 " + donut;
  console.log(donut);
});


/*Parameters
The function that you pass to the forEach() method can take up to three parameters.

The forEach() method will call this function once for each element in the array (hence the name forEach.)
Each time, it will call the function with different arguments.
The first parameter will get the value of the array element.
The second parameter will get the index of the element (starting with zero).
The third parameter will get a reference to the whole array, which is handy if you want to modify the elements. */

var words = ['cat', 'in', 'hat'];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});
/*Prints:
Word 0 in cat,in,hat is cat
Word 1 in cat,in,hat is in
Word 2 in cat,in,hat is hat */


var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(num, i) {
    if (test[i] % 3 === 0) {
      test[i] += 100;
    }
});

console.log(test);


// a smaller array example
var test = [12, 29, 11, 3];

// Write your code here
test.forEach(function(item, index){
    if(item%3===0){
        // The commented statements below would not be able to change the value of item
        // because the `item` is a COPY of actual element, while actual is test[index]
        item = item + 100;
        console.log("The updated element is "+item+" and actual is "+test[index]);
        test[index]=test[index]+100;
    }
    //else
    //    console.log("Element "+item+" is not divisible by 3");
});
console.log(test);
