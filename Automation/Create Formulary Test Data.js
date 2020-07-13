var d = new Date();
var todaysDate = d.getMonth().toString() + "/" + d.getDate().toString() + "/" + d.getFullYear().toString();

return [{
  "formularyName": "Create Formulary Test FDB " + todaysDate,
  "drugDB": 0,
  "classSys": 2
},
  {
  "formularyName": "Create Formulary Test MS " + todaysDate,
  "drugDB": 1,
  "classSys": 1
}];



// // FDB
// var d = new Date();
// var todaysDate = d.getMonth().toString() + "/" + d.getDate().toString() + "/" + d.getFullYear().toString();
//
// return {
//   "formularyName": "Create Formulary Test FDB " + todaysDate,
//   "drugDB": 0,
//   "classSys": 2
// };
//
// // Medispan
// var d = new Date();
// var todaysDate = d.getMonth().toString() + "/" + d.getDate().toString() + "/" + d.getFullYear().toString();
//
// return {
//   "formularyName": "Create Formulary Test MS " + todaysDate,
//   "drugDB": 1,
//   "classSys": 1
// };
//
//
// // custom action to select db and have onchange fire
// function setDB(selectionIndex) {
//    document.querySelectorAll('#ctl00_cphMainContent_ddlDrugDataBasis option')[selectionIndex].selected = true;
//
//    var dbMenu = document.querySelector('#ctl00_cphMainContent_ddlDrugDataBasis');
//    var event = new Event('change');
//    dbMenu.dispatchEvent(event);
// };
// // custom action to select Therapeutic class system and have onchange fire
// function setClassSys(selectionIndex) {
//    document.querySelectorAll('#ctl00_cphMainContent_ddlClassType option')[selectionIndex].selected = true;
//
//    var dbMenu = document.querySelector('#ctl00_cphMainContent_ddlClassType');
//    var event = new Event('change');
//    dbMenu.dispatchEvent(event);
// };
//
//
// // run upload condition
// return document.querySelectorAll('#ctl00_cphMainContent_ddlClassType option')[selectionIndex].selected === false;
// // then set PARAMS to selectionIndex = drugDB
//
//
//
//
// var d = new Date();
// var todaysDate = d.getMonth().toString() + "/" + d.getDate().toString() + "/" + d.getFullYear().toString();
//
// return {
//   "formularyName": "Create Formulary Test MS " + todaysDate,
//   "drugDB": "Medi-Span",
//   "classSys": "Medi-Span Therapeutic Classification"
// };
