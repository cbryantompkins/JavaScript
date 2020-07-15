var price = 15.00;
var money = 20.00;

if(money >= price) {
    console.log("buy it")
} else {
  console.log("don't buy it");
}


var a = 1;
var b = 2;

if (a > b) {
  console.log("a greater than b");
} else {
  console.log("a less than or equal to b");
}

var weather = 'sunny';

if (weather === 'snow') {
  console.log('Bring a coat.');
} else if (weather === 'rain') {
  console.log('Bring a jacket.');
} else {
  console.log('Wear shorts.');
}

var number = 2;

if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}


var musicians = 3;

if (musicians === 3) {
  console.log("trio");
} else if (musicians === 4) {
  console.log("quartet");
} else if (musicians >= 5) {
  console.log("big group");
} else if (musicians <= 1) {
  console.log("not a group");
}
