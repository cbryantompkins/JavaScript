var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);//what to do
  start = start + 2; // how to get to the next item
}

var x = 10;
while (x <= 25) {
  console.log('Printing out x = ' + x);
  x = x + 2;
}

// FizzBuzz JS style
// my first try
var x = 1;

while (x <= 20) {
  var fizz = !(x % 3);
  var buzz = !(x % 5);
  var fizzbuzz = fizz && buzz;
  if (fizz) {
    console.log('fizz');
  }
  else if (buzz) {
    console.log('buzz');
  }
  else if (fizzbuzz) {
    console.log('fizzbuzz');
  }
  else {
    console.log(x);
  }
  x = x + 1
}

// udacity's way. it is more compact.
var x = 1;

// while loop with a stop condition
while (x <= 20) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("fizzbuzz");
    }else if (x % 5 === 0) {
        console.log("buzz");
    }else if (x % 3 === 0) {
        console.log("fizz");
    }
    else {
        console.log(x);
    }
    // increment x at the end of each loop
    x = x + 1 ;
}

// most compact version with my edits
var x = 1;

// while loop with a stop condition
while (x <= 20) {
    if (!(x % 3) && !(x % 5)) {
        console.log("fizzbuzz");
    }else if (!(x % 5)) {
        console.log("buzz");
    }else if (!(x % 3)) {
        console.log("fizz");
    }
    else {
        console.log(x);
    }
    // increment x at the end of each loop
    x = x + 1 ;
}


// 99 Bottles loop

var num = 3;

while (num >= 2) {
  console.log(num + " bottles of juice on the wall! " +
              num + " bottles of juice! Take one down, pass it around... " +
              (num -1) + " bottles of juice on the wall!");
  num = num -1;
}
console.log(num + " bottle of juice on the wall! " +
            num + " bottle of juice! Take one down, pass it around... " +
            (num -1) + " bottles of juice on the wall!");


// udacity's version. shows i forgot to change the bottles to bottle for 2 bottles to 1 bottle
while (num >=1) {
    // Last iteration. Note occurances of bottle, bottle, bottleS
    if (num === 1) {
        console.log(num + " bottle of juice on the wall! "
                    + num + " bottle of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
    }
    // Second-last iteration. Note occurances of bottleS, bottleS, bottle
    else if (num === 2){
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottle of juice on the wall!");
    }
    // All other iterations. Note occurances of bottleS, bottleS, bottleS
    else {
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
    }
    num = num - 1;
}


var x = 60;

while (x >= 0) {
  if (x === 50) {
    console.log("Orbiter transfers from ground to internal power");
  }
  else if (x === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  }
  else if (x === 16) {
    console.log("Activate launch pad sound suppression system");
  }
  else if (x === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  }
  else if (x === 6) {
    console.log("Main engine start");
  }
  else if (x === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  }
  else {
    console.log("T-"+x+" seconds");
  }
  x = x - 1
}
