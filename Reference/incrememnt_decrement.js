x++ or ++x // same as x = x + 1
//HOWEVER
x++ returns the varialbe value first and then increments by 1. example x = 0 ; x++ returns 0 first, then 1
++x increments first and then returns. example x = 0 ; ++x returns 1, then 2
x-- or --x // same as above but decrements
x += 3 // same as x = x + 3
x -= 6 // same as x = x - 6
x *= 2 // same as x = x * 2
x /= 5 // same as x = x / 5


var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}
// for loop version
for (var x = 9; x >= 1; x--) {
  console.log("hello " + x);
}

//factorial loop
let solution = 1

for (var x = 1; x <= 12; x++){
     solution *= x;
}
console.log(solution);
