/*Using forEach() will not be useful
if you want to permanently modify the original array.
forEach() always returns undefined. However, creating a new array
from an existing array is simple with the powerful map() method.

With the map() method, you can take an array,
perform some operation on each element of the array, and return a new array. */


var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var inmprovedDonuts = donuts.map(function(donut){
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
})

console.log(donuts);
console.log(inmprovedDonuts);

// donuts array: ["jelly donut", "chocolate donut", "glazed donut"]
// improvedDonuts array: ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]

/*The map() method accepts one argument,
a function that will be used to manipulate each element in the array.
In the above example, we used a function expression to pass that function into map().
This function is taking in one argument, donut which corresponds to each element in the donuts array.
You no longer need to iterate over the indices anymore. map() does all that work for you. */

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

var totals = bills.map(function(bill) {
  var total = (bill * .15) + bill;
  total = Number(total.toFixed(2));
  return total;
})

console.log(totals);
