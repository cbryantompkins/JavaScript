const tableArray_1 = []

const getTable_1 = function () {

  var table = document.getElementById('bv-multilineGrid');
  var table_pos = table.getBoundingClientRect()
  var x_pos = table_pos.x
  var y_pos = table_pos.y
  tableArray_1.push(x_pos, y_pos)

}

exportsTest.tableArray = tableArray


const tableArray_2 = []

const getTable_2 = function () {

  var table = document.getElementById('bv-multilineGrid');
  var table_pos = table.getBoundingClientRect()
  var x_pos = table_pos.x
  var y_pos = table_pos.y
  tableArray_2.push(x_pos, y_pos)

}
