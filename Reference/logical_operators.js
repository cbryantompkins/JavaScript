var ken = 'not busy';
var weather = 'nice';

if (ken === 'not busy' && weather === 'nice') {
  console.log('hang out in the back yard');
}



// ! means logical NOT - returns the opposite value of the expression, so hear it evaluates to false
var n = !(4 === 4)
console.log(n);

// murder mystery

// A room can be either of - dining room, gallery, ballroom, or billiards room
var room = "dining room";

// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff

var suspect = "Mr. Parkes";

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/

// Initial values
var weapon = '';
var solved = false;

/*
The codes below show different ways of using logical operators and nested if statements
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/
// one way of doing it
if (room === 'ballroom' && suspect === 'Mr. Kalehoff') {
    weapon = 'poison';
    solved = true;
// nested if statement after the value is first set. you could do more with this
// because its not based on a compound conditional statement
} else if (room === 'gallery') {
    weapon = 'trophy';
    if (suspect === 'Ms. Van Cleve')
      solved = true;
} else if (room === 'billiards room') {
    weapon = 'pool stick';
    if (suspect === 'Mrs. Sparr')
      solved = true;
} else if (room === 'dining room') {
    weapon = 'knife';
    if (suspect === 'Mr. Parkes')
    solved = true;
}
/* ****************************************** */
// The code below will run only when `solved` is true
if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon +"!");
} else {
  console.log("UNSOLVED MYSTERY")
}
/* ****************************************** */
