var express = require('express');
var app = express();

app.get('/cheer.txt', function(req,res){
	res.end('you are a nice eyed pea ball');
});

app.get('/jeer.txt', function(req, res){
	res.end('your mother was indeed a hampster.');
});

var server = app.listen(8080, function(){
	console.log('listening on port 8080');
});