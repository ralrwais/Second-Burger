const mysql = require('mysql');

var connection = mysql.createConnection({
	host: "127.0.0.1",
	port: 3306,
	user: "root",
	password: "",
	database: "burgers2_db"
});

connection.connect(function(err){
	if(err){
		throw new Error('Connection to database failed')
	}
	console.log('Connection successful')
})

module.exports = connection;
