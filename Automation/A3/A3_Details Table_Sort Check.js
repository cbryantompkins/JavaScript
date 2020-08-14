
//Lives check

function checkLivesSort() {

var details = document.getElementById('bv-detailGrid').children[1].children[0].children[1]
var detailsRows = details.rows

for (var i = 0; i < detailsRows.length-1; i++) {
  var value1 = detailsRows[i].cells[4].innerText;
  var value2 = detailsRows[i+1].cells[4].innerText;
  var value1Number = parseFloat(value1.replace(/,/g, ''));
  var value2Number = parseFloat(value2.replace(/,/g, ''));
  if (value1Number >= value2Number) {
    //console.log('Correct Sort Order!')
  }
  else {
      throw new Error('Lives sort order incorrect.');
  }
 }

}


//Controller Check
function checkControllerSort() {

var details = document.getElementById('bv-detailGrid').children[1].children[0].children[1]
var detailsRows = details.rows

for (var i = 0; i < detailsRows.length-1; i++) {
  var a = detailsRows[i].cells[1].innerText;
  var b = detailsRows[i+1].cells[1].innerText;
  if (a.localeCompare(b) === -1) {
    //console.log('Correct Sort Order!')
  }
  else {
      throw new Error('Controller sort order incorrect.');
  }
 }

}
