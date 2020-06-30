
// click select of first row
document.querySelectorAll('#ctl00_cphMainContent_formularyList_rgFormularies_ctl00 a')[0].click();


// gets table and body
document.getElementById("ctl00_cphMainContent_formularyList_rgFormularies_ctl00").getElementsByTagName('tbody')[0]

//queries first link of selected row
document.querySelector('.rgSelectedRow a')


//oringial version
function clickSelect() {
  var exportTable = document.getElementById("ctl00_cphMainContent_formularyList_rgFormularies_ctl00").getElementsByTagName('tbody')[0];
  var exportRows = exportTable.rows
  for (var r = 0; r <exportRows.length; r++) {
    for (var c = 0; c < exportRows[r].cells.length; c++) {
      if (exportRows[r].cells[c].innerText === 'Optum Calpers' && exportRows[r].cells[c+1].innerText === '1' && exportRows[r].cells[c+8].innerText === '01/31/20 14:36') {
        exportRows[r].cells[0].click();
        if (document.querySelector('.rgSelectedRow') !== null) {
          document.querySelector('.rgSelectedRow a').click()
        }
      }
      else console.log("Formulary Not Found");
    }
  }
}


//version with paramenters
function clickSelect(tableID, formName, version, approvalDate) {
  var exportTable = document.getElementById(tableID).getElementsByTagName('tbody')[0];
  var exportRows = exportTable.rows
  for (var r = 0; r <exportRows.length; r++) {
    for (var c = 0; c < exportRows[r].cells.length; c++) {
      if (exportRows[r].cells[c].innerText.toLowerCase() === formName.toLowerCase() && exportRows[r].cells[c+1].innerText == version && exportRows[r].cells[c+8].innerText == approvalDate) {
        exportRows[r].cells[0].click();
        if (document.querySelector('.rgSelectedRow') !== null) {
          document.querySelector('.rgSelectedRow a').click()
        }
      }
      else console.log("Formulary Not Found");
    }
  }
}

clickSelect("ctl00_cphMainContent_formularyList_rgFormularies_ctl00", 'Optum Calpers', '1', '01/31/20 14:36')
