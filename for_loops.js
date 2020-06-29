for ( start; stop; step ) {
  // do this thing
}
// more detail
        ususally a varialbe         while true -> jumps into loop     defines was step to take after loop is run

for (sets the starting condition;       checks a coniditon;             step) {

  some type of command or function;

}

var array = [1,2,3]
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (var i = 0; i < 6; i = i + 1) {
  console.log("Printing out i = " + i);
}

/*For each value of x in the outer loop, the inner for loop executes completely.
The outer loop starts with x = 0, and then the inner loop completes its cycle with all values of y:*/

x = 0 and y = 0, 1, 2 // corresponds to (0, 0), (0, 1), and (0, 2)
Once the inner loop is done iterating over y, then the outer loop continues to the next value, x = 1,
and the whole process begins again.

x = 0 and y = 0, 1, 2 // (0, 0) (0, 1) and (0, 2)
x = 1 and y = 0, 1, 2 // (1, 0) (1, 1) and (1, 2)
x = 2 and y = 0, 1, 2 // (2, 0) (2, 1) and (2, 2)
etc.

for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}


// seat row combination - nested for loops

for (var r = 0; r <=25; r++) {
  for (var s = 0; s <= 99 ; s++) {
    console.log(r+"-"+s);
  }
}
