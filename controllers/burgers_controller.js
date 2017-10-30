const express = require('express');
var router = require('router');

var burgerData = require('../models/burger.js');

router.get('/', function(req, res){
	burgerData.selectAll(function(data) {
		var hbsObj = {
			burger: data
		};
		console.log(hbsObj);
		res.render("index", hbsObj);
	});
});

router.post('/', function(req, res){
	burgerData.create([
		"name", 
		"eaten"
		],
		[
		req.body.name, 
		req.body.eaten
		], function() {
			res.redirect("/");
		});
});

router.put("/:ID", function(req,res) {
	var condition = "ID = " + req.params.ID;

	console.log("condition", condition);

	burgerData.update({
		eaten: req.body.eaten
	},
	condition, function() {
		res.redirect("/");
	});
});

module.exports = router;

