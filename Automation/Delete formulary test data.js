var d = new Date();
var mnth = d.getMonth()+1;
var todaysDate = mnth.toString() + "/" + d.getDate().toString() + "/" + d.getFullYear().toString();

return [{
  "formulary": "Formulary Test FDB " + todaysDate,
},
  {
  "formulary": "Formulary Test MS " + todaysDate,
}];


var delTable = document.getElementById('ctl00_cphMainContent_upFormulary').getElementsByTagName('tbody')[1];
var delTableRows = delTable.rows;

for (var r = 0; r < delTableRows.length; r++) {
     if (delTableRows[r].cells[1].innerText === formName) {
       delTableRows[r].cells[1].firstElementChild.click();
  }
}









//////////////////////////////////////////////////////////////////////////
/*var selectedRow = document.querySelectorAll('.dataEdit td td table tbody');
var selectedRowTableRows = selectedRow[0].rows

 for (var v = 0; v < selectedRowTableRows.length; v++) {
   if (selectedRowTableRows[v].cells[3].innertext === "X") {
     selectedRowTableRows[v].cells[3].firstElementChild.click();
}
}

var verTablerows = document.getElementById('ctl00_cphMainContent_upFormulary').getElementsByTagName('tbody')[1].rows[r].cells[1].querySelectorAll('tbody')[1].rows
   var verTablerows = document.getElementById('ctl00_cphMainContent_upFormulary').getElementsByTagName('tbody')[1].rows[67].cells[1].querySelectorAll('tbody')[1].rows
  }
  var verTablerows = document.getElementById('ctl00_cphMainContent_upFormulary').getElementsByTagName('tbody')[1].rows[67].cells[1].querySelectorAll('tbody')[1].rows[1].cells[3].innerText;






  for (var v = 0; v < selectedRowTableRows.length; v++) {
     if (selectedRowTableRows[v].cells[3].innertext !== null) {
       selectedRowTableRows[v].cells[3].firstElementChild.click();
  }
  }
*/
