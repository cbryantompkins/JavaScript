function validateOption() { var menuOption = document.getElementById('ctl00_cphMainContent_rptTierInfo_ctl01_ddlTierName').selectedOptions[0].innerText;
                        if (menuOption.toLowerCase() !== 'generic') {
                           return Promise.reject(
                             new Error('Chosen Option does not match.')
                          );
                        }
                      };


//testim version

function f(objectID, selectedOption) {
var menuOption = document.getElementById(objectID).selectedOptions[0].innerText;

if (menuOption.toLowerCase() !== selectedOption) {
  return Promise.reject(
    new Error('Selected Option does not match.')
  );
}
