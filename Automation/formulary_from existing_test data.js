
var d = new Date();
var mnth = d.getMonth()+1;
var todaysDate = mnth.toString() + "/" + d.getDate().toString() + "/" + d.getFullYear().toString();

return [{
  "formularyName": "From Existing FDB " + todaysDate,
  "existingForm": "Formulary Test FDB " + todaysDate,
  "classSys": 2
},
  {
  "formularyName": "From Existing MS " + todaysDate,
  "existingForm": "Formulary Test MS " + todaysDate,
  "classSys": 1
}];


//select formulary by name
function clickSelect(tableID, formName) {
  var exportTable = document.getElementById(tableID).getElementsByTagName('tbody')[0];
  var exportRows = exportTable.rows
  for (var r = 0; r <exportRows.length; r++) {
    for (var c = 0; c < exportRows[r].cells.length; c++) {
      if (exportRows[r].cells[c].innerText.toLowerCase() === formName.toLowerCase()) {
        exportRows[r].cells[0].click();
        if (document.querySelector('.rgSelectedRow') !== null) {
          document.querySelector('.rgSelectedRow a').click()
        }
      }
      else console.log("Formulary Not Found");
    }
  }
}

clickSelect("ctl00_cphMainContent_formularyList_rgFormularies_ctl00", 'Optum Calpers')







// click select of first row
document.querySelectorAll('#ctl00_cphMainContent_formularyList_rgFormularies_ctl00 a')[0].click();


// gets table and body
document.getElementById("ctl00_cphMainContent_formularyList_rgFormularies_ctl00").getElementsByTagName('tbody')[0]

//queries first link of selected row
document.querySelector('.rgSelectedRow a')
