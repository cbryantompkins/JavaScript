  function clickSelect() {

    var editTable = document.getElementById("ctl00_cphMainContent_flCurrent_rgFormularies_ctl00").getElementsByTagName('tbody')[0];
    var editRows = editTable.rows
    for (var r = 0; r < editRows.length; r++) {
        if (editRows[r].cells[16].style.color === 'red') {
          editRows[r].click()
          break
        }
      }
        if (document.querySelector('.rgSelectedRow') !== null) {
            document.querySelector('.rgSelectedRow a').click()
          }
            else console.log("Formulary Not Found");
    }

//refactored
    function clickSelect(tableID) {
  //add tableID as JS parameter in Testim UI
  //gets the main table and rows
      var editTable = document.getElementById(tableID).getElementsByTagName('tbody')[0];
      var editRows = editTable.rows
  //for every row, checks if the date is colored red
  //if so it clicks the row and stops
      for (var r = 0; r < editRows.length; r++) {
          if (editRows[r].cells[16].style.color === 'red') {
            editRows[r].click()
            break
          }
        }
//if there is a selected row, clicks the first link which sneds to Edit
          if (document.querySelector('.rgSelectedRow') !== null) {
              document.querySelector('.rgSelectedRow a').click()
            }
            //otherwise, no formulary with red date exists
              else console.log("All formularies up to date.");
      }

clickSelect("ctl00_cphMainContent_flCurrent_rgFormularies_ctl00")
