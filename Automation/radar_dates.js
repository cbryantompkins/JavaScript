function radar(){

return new Promise((resolve,reject) => {

Date.prototype.subtractDays = function(d) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate()-d);
        return date;
}

  function getDates(startDate, stopDate) {
     var dateArray = new Array();
     var currentDate = stopDate;
     while (currentDate >= startDate) {
       dateArray.push(currentDate)
       currentDate = currentDate.subtractDays(1);
     }
     return dateArray;
   }

var dateArray = getDates(new Date().subtractDays(6), new Date());
for (i = 0; i < dateArray.length; i++ ) {
  var date = dateArray[i];
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var month = months[date.getMonth()];
  var day = date.getDate().toString();
  var year = date.getFullYear();
  var fullDate = month + " " + day + ", " + year;
  dateArray.splice(i, 1, fullDate);
}

var updateDate = document.querySelectorAll('.update-date');

for (var i = 0; i < updateDate.length; i++) {
  if (new RegExp(dateArray.join("|")).test(updateDate[i].innerText) == false); {
    reject('Unexpected Date Found');
  	}
  }
  resolve();
});
}
