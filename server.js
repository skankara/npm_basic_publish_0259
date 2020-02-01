//var http = require('http');
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.get('/',function(req,res){

});
var server = app.listen(8080, function(){

});

//Creating a server using http and node js
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
// }).listen(8080);
