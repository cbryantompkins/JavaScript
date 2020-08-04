
var d = new Date();
var mnth = d.getMonth()+1;
var todaysDate = mnth.toString() + "/" + d.getDate().toString() + "/" + d.getFullYear().toString();

return [{
  "existingForm": "Formulary Test FDB " + todaysDate,
},
  {
  "existingForm": "Formulary Test MS " + todaysDate,
}];


//select formulary by name
function clickSelect(tableID, formName) {
  var newVersionTable = document.getElementById(tableID).getElementsByTagName('tbody')[0];
  var newVersionRows = exportTable.rows
  for (var r = 0; r <newVersionRows.length; r++) {
    for (var c = 0; c < newVersionRows[r].cells.length; c++) {
      if (newVersionRows[r].cells[c].innerText === formName) {
        newVersionRows[r].cells[0].click();
      }
      else console.log("Formulary Not Found");
    }
  }
}

clickSelect("ctl00_cphMainContent_rgFormularies_ctl00", existingForm)
