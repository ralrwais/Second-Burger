const connection = require('./connection.js');

//SQL question mark helper function
function questionMarks(num) {
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push("?");
	}

	return arr.toString();
}

//SQL object helper function 
function objSQL(obj) {
	var arr = [];

	for(var key in obj) {
		if(Object.hasOwnProperty.call(obj, key)){
			arr.push(key + "= " + obj[key]);
		}
	}
	return arr.toString();
}




let orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function(err, result) {
			if(err){
				throw err;
			}
			cb(result);
		});
	},

	create: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += questionMarks(vals.length);
		queryString +=") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if(err) {
				throw err;
			}

			cb(result);
		})

	},

	update: function(table, objColVals, condition, cb){
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objSQL(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if(err) {
				throw err;
			}
			cb(result);
		})

	}
}

module.exports = orm;












