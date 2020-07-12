var workbook = new Excel.Workbook();

// Set workbook options
//
workbook.calcProperties.fullCalcOnLoad = true;

return new Promise((resolve, reject) => {

  workbook.xlsx.load(fileBuffer).then(workbook => {

    var workSheet =  workbook.getWorksheet("Historical Changes");
    var change_impact = [];

    // Get Column Names
    //
    var column_names = [];
    var header_row = workSheet.getRow(columnNamesRowId);
    function getColumnName(value, index, array) {
      column_names.push(value);
    }
    header_row.values.forEach(getColumnName);

    // Loop all Rows
    //
    workSheet.eachRow({ includeEmpty: false }, function(row, rowNumber) {

      console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));

      function getRowData(value, index, array) {

        console.log("  " + column_names[index-1] + " = \"" + value + "\"");

        // Marshal all the Change Impace cell values
        //
        if (column_names[index-1] === "Change_Impact") {
          change_impact.push(value);
        }

      }
      row.values.forEach(getRowData);

    });

    // Validate that Negative or Positive has been found at least once in a Change Impact column
    //
    if (change_impact.includes("Positive") || change_impact.includes("Negative"))
      resolve();
    else
      throw new Error("Change Impact columns do not Positive or Negative make");

  });


////////////////


function readSheetNames(name1, name2){

  const workbook = XLSX.read(fileBuffer);

  var sheet_1_name = workbook.SheetNames[0];

  var sheet_2_name = workbook.SheetNames[1];

  if (sheet_1_name !== name1 || sheet_2_name !== name2) {
      throw new Error(`Failed to validate sheet names`);
    }
};
  // const { SheetNames, Sheets } = XLSX.read(fileBuffer);
  // console.log(SheetNames);
  // console.log(Sheets);
  // console.log( Sheets[SheetNames]);

  /*if (SheetNames.length !== parseInt(expectedNumOfSheets)) {
    throw new Error(`Number of ssheets doesn't match ${SheetNames.length}`);
  }*/

  // const sheet = Sheets[SheetNames[0]];

  //console.log(sheet);

  // const sheetAsJson = XLSX.utils.sheet_to_json(sheet);

  //console.log(sheetAsJson);

  /*if (sheetAsJson[0].Name !== "Detail") {
    throw new Error(`Failed to validate sheet 1`);
  }
  console.log("sheet", JSON.stringify(sheetAsJson));*/
