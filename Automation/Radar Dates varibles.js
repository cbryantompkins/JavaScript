//uses Date prototype to add custom function that subtracts a number of days (variable 'd')
Date.prototype.subtractDays = function(d) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate()-d);
        return date;
}
//function with two paramenters, the start and stop Dates
// creates a new array and pushes the date -1 day to array until stop date in the current Date
//creates a list of sequential dates
  function getDates(startDate, stopDate) {
     var dateArray = new Array();
     var currentDate = stopDate;
     while (currentDate >= startDate) {
       dateArray.push(currentDate)
       currentDate = currentDate.subtractDays(1);
     }
     return dateArray;
   }
//using getDates from above, takes two parameters - here, the current date minus 6 and todays Date
// then iterates over the array created by getDates and transforms them, then splices them into the Array
// results in an array of dates like 'Jul 14, 2020'
var dateArray = getDates(new Date().subtractDays(7), new Date());
for (let i = 0; i < dateArray.length; i++ ) {
  var date = dateArray[i];
  var month = date.toLocaleString('default', {month: 'short'});
  var day = date.getDate().toString();
  var year = date.getFullYear();
  var fullDate = month + " " + day + ", " + year;
  dateArray.splice(i, 1, fullDate);
}
//debuggng log for array
console.log(dateArray[0]);
console.log(dateArray[7]);

const thisWeek = dateArray[0]
const lastWeek = dateArray[7]

exportsTest.lastWeekDate = lastWeek;
exportsTest.thisWeekDate = thisWeek;
