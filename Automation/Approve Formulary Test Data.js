var d = new Date();
var mnth = d.getMonth()+1;
var todaysDate = mnth.toString() + "/" + d.getDate().toString() + "/" + d.getFullYear().toString();

return [{
  "formName": "Formulary Test FDB " + todaysDate,
  'version': 1,
  'tableID': 'ctl00_cphMainContent_flCurrent_rgFormularies_ctl00',
  'tableID_2': 'ctl00_cphMainContent_rgApprovalQueue_ctl00'
},
  {
  "formName": "Formulary Test MS " + todaysDate,
  'version': 1,
  'tableID': 'ctl00_cphMainContent_flCurrent_rgFormularies_ctl00',
  'tableID_2': 'ctl00_cphMainContent_rgApprovalQueue_ctl00'
}];



//clicks Approve/Rejct link of mactching formulary version
var clickApprove = function (tableID_2, formName, version) {
  var approveTable = document.getElementById(tableID_2).getElementsByTagName('tbody')[0];
  var approveRows = approveTable.rows

  for (var r = 0; r <approveRows.length; r++) {
    for (var c = 0; c < approveRows[r].cells.length; c++) {
      if (approveRows[r].cells[c].innerText == version && approveRows[r].cells[c+1].innerText === formName) {
        approveRows[r].cells[0].firstElementChild.click();
      }
      else throw new console.error('Formulary not found.');
    }
  }
}

//for console test
var d = new Date();
var todaysDate = d.getMonth().toString() + "/" + d.getDate().toString() + "/" + d.getFullYear().toString();

clickApprove('ctl00_cphMainContent_rgApprovalQueue_ctl00', 'Formulary Test FDB '+ todaysDate, 1)



//clicks the row by formulary name alone
var clickRow = function (tableID formName) {
    var formTable = document.getElementById(tableID).getElementsByTagName('tbody')[0];
    var formRows = formTable.rows

            for (var r = 0; r < formRows.length; r++) {
    					for  (var c = 0; c < formRows[r].cells.length; c++) {
                if (formRows[r].cells[c].innerText === formName) {
                  formRows[r].cells[0].click();

                }
              }
            }
          };

tableID is 'ctl00_cphMainContent_flCurrent_rgFormularies_ctl00'

//download vailidation for Full and Difference exports
function readSheetNames(sheetName) {

  const workbook = XLSX.read(fileBuffer);

  var sheet_1_name = workbook.SheetNames[0];

  if (sheet_1_name !== sheetName) {
      throw new Error(`Failed to validate sheet names`);
    }
};
