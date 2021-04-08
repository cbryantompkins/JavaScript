var mysql = require('mysql');

var con = mysql.createConnection({
  host: "curts-mysql.mysql.database.azure.com",
  user: "curt",
  password: "Macintosh1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});