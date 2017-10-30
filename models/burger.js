//code that will call the ORM functions using burger specific input for the ORM.

var orm = require('../config/orm.js');


var burgerData = {
	selectAll: function(cb) {
		orm.slectAll("burgers", function(res) {
			cb(res);
		});
	},

	create: function(col, vals, cb) {
		orm.create("burgers", cols, vals, function(res) {
			cb(res);
		});
	},

	update: function(objColVals, condition, cb) {
		orm.update("burgers", objColVals, condition, function(res) {
			cb(res);
		});
	}
}

module.exports = burgerData;

