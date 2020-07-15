function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

console.log(makeLine(10));

// MY second attempt. leaves lines really far apart and undefined at the end.
// function buildTriangle(length) {
//   for (var i = 1; i <= length; i++) {
//     console.log(makeLine(i));
//   }
// }
//
// console.log(buildTriangle(10));

// WITHOUT USING MAKELINE
// function buildTriangle(length) {
//   var line = "";
//   for (var j = 1; j <= length; j++) {
//     line += "* "
//     console.log(line + "\n");
//   }
//   return
// }
//
// console.log(buildTriangle(10));

// correct version - udacity 
function buildTriangle(length) {
    // Let's build a huge string equivalent to the triangle
    var triangle = "";

    //Let's start from the topmost line
    var lineNumber = 1;

    for(lineNumber=1; lineNumber<=length; lineNumber++){
        // We will not print one line at a time.
        // Rather, we will make a huge string that will comprise the whole triangle
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}

console.log(buildTriangle(10));
