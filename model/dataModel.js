var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  port:3308,
  user: 'root',
  password: 'mysql4',
  database: 'bank'
});

module.exports = connection ;