var express = require("express");
var app = express();
var valid = require("../Common/validation");

var port = process.env.PORT || 3000;

app.get('/', function(req, res){

   var st = valid.data.valid1("ABC",1);
   console.log(st.Success);
   res.send("Hello world!");
});

app.listen(port, function () {
	console.log("running on port " + port);
});