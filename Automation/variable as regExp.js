//Searches the page for the values we wish to compare
var searchBox = document.getElementById('txtDrugSearch').value;
var drugTable = document.querySelectorAll('tbody')[1].rows[0].cells[3].innerText;

//turns the variable text into a regular expression
const regEx = new RegExp(searchBox);

//tests the expression against the other text to see if it’s contained within
testCompare = regEx.test(drugTable);

//returns true/false depending on the step above. 
return testCompare;
