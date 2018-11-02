const mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: 'root',
    password: 'rootroot',
    database: 'burgers_db'
  });

  connection.connect(
      e => e ? console.log(e) : console.log('connection succesfull')
    );

  module.exports = connection