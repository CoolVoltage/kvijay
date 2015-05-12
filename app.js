var http = require('http');
var serveStatic = require('serve-static');
var serve = serveStatic('public/',{'index':['index.html','index.htm']});

var server = http.createServer(function(req,res){
	var fileNotFound = function(req,res){
		
	}	
	serve(req,res,fileNotFound);
});

server.listen(80);
