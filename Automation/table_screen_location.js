elementID = 'bv-multilineGrid'
//step = Locate Table
//creat array to store coordinates
const tableLocation = []

//find element, find its full position, extract the x and y coordinates and push them to the array
var element = document.getElementById(elementID);
var element_pos = element.getBoundingClientRect();
var x_pos = element_pos.x;
var y_pos = element_pos.y;
tableLocation.push(x_pos, y_pos);

//push to rest of test
exportsTest.expectedLocation = tableLocation;

//relocate Table in another step and compare
const actualLocation = []

var element = document.getElementById(elementID);
var element_pos = element.getBoundingClientRect();
var x_pos = element_pos.x;
var y_pos = element_pos.y;
actualLocation.push(x_pos, y_pos)
//add expectedLocation to Params list
if (expectedLocationVar[0] == actualLocation[0] && expectedLocationVar[1] == actualLocation[1]) {
  return true;
}
else throw new Error('Table location has changed.')
