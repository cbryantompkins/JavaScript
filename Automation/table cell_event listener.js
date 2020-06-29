// passed to the table cells' addEventListener
// sets the current color picker value to the selected table cell
function clickResponse() {
    event.target.bgColor = colorPicker.value;
  }
// loops over row and cell insertion based on the values in the form fields when the submit button is clicked
function makeGrid() {
  for (let r = 0; r < gridHeight.attributes.value.ownerElement.valueAsNumber; r++) {
    var row = table.insertRow(r);
      for (let c = 0; c < gridWidth.attributes.value.ownerElement.valueAsNumber; c++) {
        const newCell = row.insertCell(c);
        newCell.addEventListener('click', clickResponse);
        }
      }
    }
