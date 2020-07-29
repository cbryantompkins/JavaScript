
function selectReports() {

var menu = document.getElementById('ctl00_cphMainContent_ddlReports');
for (var i = 0; i < menu.options.length; i++) {
  menu.options[i].selected = true;
  menu.onchange()
  for (let j = 0; j < 1; j++) {
    var ops = document.getElementById('ctl00_cphMainContent_OperationDDL')
    if (ops !== null) {
      ops.options[1].selected = true;
    }
    else {
      break
    }
   }
  }
}

function selectReports(i) {
  debugger
  var menu = document.getElementById('ctl00_cphMainContent_ddlReports');
  menu.options[i].selected = true;
  menu.onchange()
  if (document.getElementById('ctl00_cphMainContent_OperationDDL') == null) {
      return;
        }
  else {
    ops.options[1].selected = true;
  }
}


var ops = document.getElementById('ctl00_cphMainContent_OperationDDL')


//Reports Index step
//takes the length of the reports menu and pushes indexes to the array
var menu = document.getElementById('ctl00_cphMainContent_ddlReports');
const reportsArray = []
for (var i = 0; i < menu.options.length; i++) {
  reportsArray.push(i)
}
//exports the varialbe 'reports' globally
exportsTest.reports = reportsArray;


//Select Report/Operation selectReports
//takes each report option and marks it true, then fires the onchange
var menu = document.getElementById('ctl00_cphMainContent_ddlReports');
for (var i = 0; i < menu.options.length; i++) {
  menu.options[i].selected = true;
  menu.onchange()

//set parameter i to:
reports[TESTIM_ITERATOR]

//place in custom loop
return TESTIM_ITERATOR < reportsList.length
