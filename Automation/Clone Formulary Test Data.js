var d = new Date();
var mnth = d.getMonth()+1;
var todaysDate = mnth.toString() + "/" + d.getDate().toString() + "/" + d.getFullYear().toString();

return [{
  "formName": "Formulary Test FDB " + todaysDate,
  'tableID': 'ctl00_cphMainContent_flCurrent_rgFormularies_ctl00'
},
  {
  "formName": "Formulary Test MS " + todaysDate,
  'tableID': 'ctl00_cphMainContent_flCurrent_rgFormularies_ctl00'
}];












var clickRow = function (tableID, formName) {
  var cloneTable = document.getElementById(tableID).getElementsByTagName('tbody')[0];
 var cloneRows = cloneTable.rows
 for (var r = 0; r <cloneRows.length; r++) {
     if (cloneRows[r].cells[2].innerText.toLowerCase() == formName.toLowerCase()) {
       cloneRows[r].cells[0].click()
     }
     else console.log("Formulary Not Found");
   }
 }


clickRow('ctl00_cphMainContent_rgFormularies_ctl00', '755 - Prestige Copy', '16984')
