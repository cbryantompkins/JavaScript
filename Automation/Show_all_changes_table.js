var changesTable = document.querySelectorAll('#bv-detailGrid .k-virtual-scrollable-wrap table')[0];

var changesRows = changesTable.rows;



function checkRowsA3(tableSelector, posIndex) {

  return new Promise((resolve,reject) => {
  var changesTable = document.querySelectorAll(tableSelector)[posIndex];
    var changesRows = changesTable.rows

            for (var r = 0; r < changesRows.length; r++) {
                if (changesRows[r].cells[0].innerText === changesRows[r].cells[1].innerText) {
                  reject('Found matching cells.');
                }
                resolve();
            }
          });
        }




  checkRowsA3('#bv-detailGrid .k-virtual-scrollable-wrap table', 0)
