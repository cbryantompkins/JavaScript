var formTable = document.getElementById("ctl00_cphMainContent_flCurrent_rgFormularies_ctl00").getElementsByTagName('tbody')[0];
var formRows = formTable.rows

        for (var r = 0; r < formRows.length; r++) {
					for  (var c = 0; c < formRows[r].cells.length; c++) {
            if (formRows[r].cells[c].innerText==="2020 December MS FRF" && formRows[r].cells[c+1].innerText === "1") {
              formRows[r].cells[0].click();
              // console.log(formRows[r].cells[c].innerText);
            }
          }
        }

var clickRow = function (tableName, cellText, adjacentCellText) {
    var formTable = document.getElementById(tableName).getElementsByTagName('tbody')[0];
    var formRows = formTable.rows

            for (var r = 0; r < formRows.length; r++) {
    					for  (var c = 0; c < formRows[r].cells.length; c++) {
                if (formRows[r].cells[c].innerText=== cellText && formRows[r].cells[c+1].innerText === adjacentCellText) {
                  formRows[r].cells[0].click();

                }
              }
            }
          }


  clickRow("ctl00_cphMainContent_flCurrent_rgFormularies_ctl00", "2020 December MS FRF", "1")
