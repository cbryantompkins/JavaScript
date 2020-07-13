

const mainContent = 'ctl00_cphMainContent_rgResults_ctl00_ctl02_ctl02_'

return [{
  "report": "Formulary Enhanced Compare Report",
  "formulary": "MMIT TEST #16741 (version 1) - Commercial (approved 02/05/2020 10:38 AM)",
  "formualryCompare": "MMIT TEST #16741 (version 1) - Commercial (approved 02/04/2020 04:33 PM)",
  "reportTab1": "Compare Report",
  "filterbox": mainContent+"FilterTextBox_Med Name",
  "filter": mainContent+'Filter_Med Name',
  "filterSetting": 'EqualTo',
  "filterValue": '2',
  "reportTab2": "Summary Tab",
  "tab2Text": "Change Type"
},{
  "report": "Formulary Enhanced Detail MMIT Format",
  "formulary": "Test Case 3 #16634 (version 1) - Commercial",
  "reportTab1": "Detail",
  "filterbox": mainContent+"FilterTextBox_CoverageLevel",
  "filter": mainContent+'Filter_CoverageLevel',
  "filterSetting": 'EqualTo',
  "filterValue": '2',
  "reportTab2": "Formulary NDC Inclusion",
  "tab2Text": "NDC Included"
},{
  "report": "Prior Authorization Detail MMIT Format",
  "formulary": "755 - Prestige Copy #16984 (version 1) - State Medicaid (HIX)",
  "reportTab1": "PA Group Details",
  "filterbox": mainContent+"FilterTextBox_COVERAGE_DURATION",
  "filter": mainContent+'Filter_COVERAGE_DURATION',
  "filterSetting": 'Contains',
  "filterValue": '2',
  "reportTab2": "PA Products",
  "tab2Text": "Product"
}];

//
// const compareTable = document.getElementById('ctl00_cphMainContent_trCompareFormulariesBaseFormulary')
//
//
// //clicks specific filter button
// function f(filterButtonID) {
//   document.getElementById(filterButtonID).click();
// };
//
// // sets filter text box with assigned value
// function f(textBoxID, textBoxValue) {
//   var textBox = document.getElementById(textBoxID);
//      textBox.value = textBoxValue;
// };
//
//
//
//
//
//
//
//
//
//
// //V1
// return [{
//   "report": "Formulary Enhanced Detail MMIT Format",
//   "formulary": "Test Case 3 #16634 (version 1) - Commercial",
//   "reportTab1": "Detail",
//   "reportTab2": "Formulary NDC Inclusion",
//   "tab2Text": "NDC Included"
// },{
//   "report": "Prior Authorization Detail MMIT Format",
//   "formulary": "755 - Prestige Copy #16984 (version 1) - State Medicaid (HIX)",
//   "reportTab1": "PA Group Details",
//   "reportTab2": "PA Products",
//   "tab2Text": "Product"
// }];
